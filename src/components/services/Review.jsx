import { HoverEffect } from "../ui/CardEffect";

export function Review() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Logical Review of Financial Models",
    description:
      "We create robust models for project finance and public-private partnerships across sectors like renewable energy, infrastructure, power, and telecom, helping you assess bids, forecast cash flow, and manage operational assets.",
    link: "https://stripe.com",
  },
  {
    title: "PPA and Lender Document Compliance",
    description:
      "Our models assist in evaluating financial viability and potential outcomes for transactions, including mergers, leveraged buyouts, and IPOs.",
    link: "https://netflix.com",
  },
  {
    title: "Adherence to FAST Standards",
    description:
      "We streamline budgeting, forecasting, and reporting processes, providing you with clear insights for strategic decision-making.",
    link: "https://google.com",
  },
  {
    title: "Optimization & Enhancement",
    description:
      "Our custom pricing models ensure that your pricing strategies are competitive, profitable, and aligned with market demands.",
    link: "https://meta.com",
  },
];
