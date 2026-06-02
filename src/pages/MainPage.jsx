import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

import { pricingData } from "../data/priceData.js";
import { auditEngine } from "../utils/auditEngine.js";
import { generateSummary } from "../lib/ai-summary.js";

const STORAGE_KEY = "audit-form-data";

const MainPage = () => {
  const [expenses, setExpenses] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, resetField, setValue, formState: { errors } } = useForm({
    defaultValues: {
      platform: "",
      category: "",
      plan: "",
      users: "",
      price: "",
    },
  });

  const { platform, category, plan, users, price } = watch();

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  useEffect(() => {
    const formData = { platform, category, plan, users, price };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setExpenses(null); 
  }, [platform, category, plan, users, price]);

  const platformOptions = useMemo(() => {
    return [...new Set(pricingData.map((item) => item.platform))];
  }, []);

  const categoryOptions = useMemo(() => {
    if (!platform) return [];
    return [
      ...new Set(
        pricingData
          .filter((item) => item.platform === platform)
          .map((item) => item.category)
      ),
    ];
  }, [platform]);

  const planOptions = useMemo(() => {
    if (!platform || !category) return [];
    return [
      ...new Set(
        pricingData
          .filter(
            (item) => item.platform === platform && item.category === category
          )
          .map((item) => item.plan)
      ),
    ];
  }, [platform, category]);

  useEffect(() => {
    resetField("category");
    resetField("plan");
  }, [platform, resetField]);

  useEffect(() => {
    resetField("plan");
  }, [category, resetField]);

  const onSubmit = async (data) => {
    setLoading(true);
    
    const customerData = {
      ...data,
      users: Number(data.users),
      price: Number(data.price),
    };

    const response = auditEngine(customerData);

    const userSpends = { 
      customerData,
      alternative: !response.status ? response.bestAlternative : null,
      savings: !response.status ? response.savings : null
    }
    
    const { summary }= await generateSummary(userSpends);
    response.aiSummary = summary;

    setExpenses(response || null);
    
    setLoading(false);
  };

  if (loading) return <div className="p-8 text-center">Loading audit results...</div>;

  return (
    <div className="w-full flex justify-center px-4 py-8">
      {!expenses ? (
        <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-center">Get Your Free Audit</h1>
          <p className="text-sm text-zinc-500 text-center mt-2">
            Analyze your current software spending
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
            <Select
              label="Platform: "
              {...register("platform", { required: true })}
              options={platformOptions}
            />

            <Select
              label="Category: "
              {...register("category", { required: true })}
              disabled={!platform}
              options={categoryOptions}
            />

            <Select
              label="Plan: "
              {...register("plan", { required: true })}
              disabled={!category}
              options={planOptions}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  label="Seats: "
                  type="number"
                  placeholder="Enter seats"
                  {...register("users", { required: true })}
                />
              </div>

              <div>
                <Input
                  label="Price: "
                  type="number"
                  placeholder="Enter monthly price"
                  {...register("price", { required: true })}
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">Price is required</p>}
              </div>
            </div>

            <Button type="submit" className="mt-2">
              Get Audit
            </Button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          {!expenses.needToUpdate ? (
            <div className="flex flex-col p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm gap-4">
              <h2 className="text-2xl font-bold text-green-600">
                Your Spending is {expenses.status || "Optimized"}
              </h2>
              <p className="text-zinc-600">{expenses.message}</p>
              
              <div className="mt-4 p-4 bg-zinc-50 rounded-lg">
                <p className="text-sm mb-3">Get notified when new optimizations apply to your stack.</p>
                <Button>Notify Me</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm gap-4">
              <div className="bg-red-50 text-red-900 p-4 rounded-xl border border-red-100 text-center">
                <h2 className="text-3xl font-black">${expenses.savings}<span className="text-lg font-medium">/mo</span></h2>
                <p className="text-sm font-semibold uppercase tracking-wide">Total Monthly Savings</p>
                
                <h3 className="text-xl font-bold mt-2">${expenses.savings * 12}<span className="text-sm font-medium">/yr</span></h3>
                <p className="text-xs uppercase tracking-wide">Total Annual Savings</p>
              </div>

              {expenses.spending < 100 && <p className="font-medium text-zinc-700">You are spending efficiently.</p>}
              {expenses.spending >= 500 && (
                <p className="font-bold text-red-600 bg-red-50 p-2 rounded text-center">
                  You are leaking ${expenses.spending * 12}/year.
                </p>
              )}

              <div className="border-t border-zinc-100 pt-4 mt-2">
                <p className="font-semibold text-lg">Recommended Action:</p>
                <p className="text-zinc-700">{expenses.recommendedAction}</p>
                
                <p className="font-semibold text-lg mt-4">Reason:</p>
                <p className="text-zinc-700">{expenses.reason}</p>
              </div>

              <div className="mt-6 bg-zinc-900 text-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Claim Your Savings</h3>
                <p className="text-sm text-zinc-300 mb-4">Get the full report emailed to you and see how Credex can reduce your bill.</p>
                <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100">
                  Unlock Full Report
                </Button>
              </div>

              <div className="mt-2 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                <label className="text-xs font-bold uppercase text-zinc-500">AI Summary</label>
                <p className="text-sm text-zinc-700 mt-1 italic">
                  {/* "Based on your stack, you are over-provisioned on seats for this tier. Downgrading to the standard plan will cover your use case while saving substantial capital..." */}
                  {expenses.aiSummary}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;