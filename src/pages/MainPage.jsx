import React, { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

import { pricingData } from "../data/priceData.js";
import { auditEngine } from "../utils/auditEngine.js";

const STORAGE_KEY = "audit-form-data";

const MainPage = () => {

  const [formState, setFormState] = useState(true);
  const [resState, setResState] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, control, resetField, setValue, formData: { errors }
  } = useForm({
    defaultValues: {
      platform: "",
      category: "",
      plan: "",
      users: "",
      price: "",
    },
  });

  // Watch form fields
  const platform = useWatch({ control, name: "platform" });
  const category = useWatch({ control, name: "category" });
  const plan = useWatch({ control, name: "plan" });
  const users = useWatch({ control, name: "users" });
  const price = useWatch({ control, name: "price" });

  // LocalStorage Persistence
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
    const formData = { platform, category, plan, users, price, };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setResState(false);
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

    return [...new Set(
      pricingData.filter(
            (item) =>
              item.platform === platform &&
              item.category === category
          )
          .map((item) => item.plan) ),];

  }, [platform, category]);

  useEffect(() => {
    resetField("category");
    resetField("plan");
  }, [platform, resetField]);

  useEffect(() => {
    resetField("plan");
  }, [category, resetField]);


  const formSubmitted = (data) => {
    setLoading(true);
    const customerData = {
      platform: data.platform,
      category: data.category,
      plan: data.plan,
      users: Number(data.users),
      price: Number(data.price)
    }

    const response = auditEngine(customerData);
    
    if(!response) {
      setResState(false);
      clearForm();
    }

    if(response) {
      setResState(true);
      clearForm();
    }

    setLoading(false);
  };

  const clearForm = () => {
    localStorage.clear(STORAGE_KEY);
    setValue("platform", "");
    setValue("category", "");
    setValue("plan", "");
    setValue("users", "");
    setValue("price", "");
  }

  if(loading) return <div>Loading...</div>;

  return (
    <div className="w-full flex justify-center px-4 py-8">

      {formState && !resState (<div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">

        <h1 className="text-3xl font-bold text-center"> Get Your Free Audit </h1>

        <p className="text-sm text-zinc-500 text-center mt-2">
          Analyze your current software spending
        </p>

        <form onSubmit={handleSubmit(formSubmitted)}
          className="mt-8 flex flex-col gap-5" >

          <Select label="Platform: " {...register("platform", {
              required: true,
            })} options={platformOptions} />
          {/* {errors.platform && (<p>{errors.platform.message}</p>)} */}

          <Select label="Category: "
            {...register("category", {
              required: true,
            })} disabled={!platform} options={categoryOptions} />
          {/* {errors.category && (<p>{errors.category.message}</p>)} */}

          <Select label="Plan: "
            {...register("plan", {
              required: true,
            })} disabled={!category} options={planOptions} />
          {/* {errors.plan && (<p>{errors.plan.message}</p>)} */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <Input label="Seats: " type="number" placeholder="Enter seats"
              {...register("users", {
                required: true,
              })} />
            {/* {errors.users && (<p>{errors.message.users}</p>)} */}

            <Input label="Price: " type="number" placeholder="Enter monthly price"
              {...register("price", {
                required: true,
              })} />
              {errors.price && (<p>{errors.price.message}</p>)}
          </div>

          {resState && (<p className="text-red-500 font-semibold">
            Your current plan is not present
          </p>)}

          <Button type="submit" className="mt-2">
            Get Audit
          </Button>

        </form>

      </div>)}

    </div>
  );
};

export default MainPage;