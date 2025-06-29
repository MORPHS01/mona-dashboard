export const filters = [
  {
    header: "source",
    filterList: ["all", "checkout", "collections"],
  },
  {
    header: "payment method",
    filterList: ["all", "bank transfer", "bank debit", "card"],
  },
  {
    header: "status",
    filterList: ["all", "successful", "pending", "failed"],
  },
  {
    header: "amount",
    filterList: ["all", "specific", "range"],
  },
  {
    header: "date range",
    filterList: [
      "all",
      "today",
      "last 7 days",
      "last 30 days",
      "this month",
      "this year",
      "specific date",
      "custom period",
    ],
  },
];
