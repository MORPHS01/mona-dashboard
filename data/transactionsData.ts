export const transactionsHeader: string[] = [
  "Transaction ID",
  "Payer",
  "Amount",
  "Status",
  "Method",
  "Source",
  "Date",
];

type TransactionsType = {
  transactionId: string;
  payer: string;
  amount: string;
  status: string;
  method: string;
  source: string;
  date: string;
  retry?: boolean;
};

export const transactions: TransactionsType[] = [
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Failed",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
    retry: true,
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Pending",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-422871",
    payer: "Jerry Wilson",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "CHECKOUT",
    date: "05/05/25, 11:36am",
  },
  {
    transactionId: "MNA -TRC-235701",
    payer: "Isioma Nwuzur",
    amount: "₦5,000",
    status: "Successful",
    method: "Bank Transfer",
    source: "COLLECTIONS",
    date: "05/05/25, 11:36am",
  },
];
