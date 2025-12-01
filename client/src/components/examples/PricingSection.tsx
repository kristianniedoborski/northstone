import PricingSection from "../PricingSection";

export default function PricingSectionExample() {
  return <PricingSection onGetQuote={() => console.log("Get quote clicked")} />;
}
