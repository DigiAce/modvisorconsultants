import { HoverEffect } from "../ui/CardEffect";

export function Trainings() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Personalized Training",
    description:
      "We create robust models for project finance and public-private partnerships across sectors like renewable energy, infrastructure, power, and telecom, helping you assess bids, forecast cash flow, and manage operational assets.",
    link: "https://stripe.com",
  },
  {
    title: "Corporate Team Training",
    description:
      "Our models assist in evaluating financial viability and potential outcomes for transactions, including mergers, leveraged buyouts, and IPOs.",
    link: "https://netflix.com",
  },
  {
    title: "Online Flexibility",
    description:
      "We streamline budgeting, forecasting, and reporting processes, providing you with clear insights for strategic decision-making.",
    link: "https://google.com",
  },
  {
    title: "Onsite Training",
    description:
      "Our custom pricing models ensure that your pricing strategies are competitive, profitable, and aligned with market demands.",
    link: "https://meta.com",
  },
];
