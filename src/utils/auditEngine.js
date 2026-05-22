import { pricingData } from "../data/priceData";

const auditEngine = (currentSub) => {
  const currentPlan = pricingData.find(p => p.platform === currentSub.platform && p.plan === currentSub.plan);
  
  if (!currentPlan) return null;

  const currentSpend = currentPlan.price * currentSub.users;
  let bestAlternative = null;
  let maxSavings = 0;

  // Core audit logic: evaluate same-vendor efficiency and cross-vendor alternatives
  for (const option of pricingData) {
    if (option.category !== currentPlan.category) continue;

    const requiresTeamPlan = currentSub.users >= 5;
    if (requiresTeamPlan && option.type === "individual") continue;

    const proposedSpend = option.price * currentSub.users;
    const savings = currentSpend - proposedSpend;

    if (savings > maxSavings) {
      maxSavings = savings;
      bestAlternative = option;
    }
  }

  if (!bestAlternative || maxSavings <= 0) {
    return { status: "optimized", message: "Current plan is highly optimized for your usage." };
  }

  // Finance-friendly reasoning generation
  let reason = "";
  if (bestAlternative.platform === currentPlan.platform) {
    reason = `Downgrading from ${currentPlan.platform} ${currentPlan.plan} to ${bestAlternative.plan} saves $${maxSavings}/mo; the current plan carries a premium per-seat cost that is overkill for ${currentSub.users} users.`;
  } else {
    reason = `Switching from ${currentPlan.platform} ${currentPlan.plan} to ${bestAlternative.platform} ${bestAlternative.plan} provides similar ${currentPlan.category} capabilities while reducing per-seat liability by $${currentPlan.price - bestAlternative.price}/mo.`;
  }

  return {
    currentPlatform: currentPlan.platform,
    currentPlan: currentPlan.plan,
    currentSpend,
    recommendedAction: `Switch to ${bestAlternative.platform} ${bestAlternative.plan}`,
    savings: maxSavings,
    reason
  };
};