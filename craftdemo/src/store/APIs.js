export const data = {
  accounts: [
    { id: 1, name: "Ross", accountnum: 123, balance: 300, trxIds: [1, 2] },
    { id: 2, name: "Monika", accountnum: 234, balance: 200, trxIds: [8, 9] },
    { id: 3, name: "Ross", accountnum: 435, balance: 435, trxIds: [0, 7] },
  ],
  transactions: [
    {
      id: 2,
      amount: 10,
      type: "D",
      closingBalance: 120,
      desc: "Paid to shopping",
      category: "Shopping",
    },
    {
      id: 2,
      amount: 10,
      type: "D",
      closingBalance: 120,
      desc: "Paid to shopping",
      category: "Shopping",
    },
    {
      id: 3,
      amount: 20,
      type: "D",
      closingBalance: 100,
      desc: "Paid to Travel",
      category: "Travel",
    },
    {
      id: 8,
      amount: 10,
      type: "A",
      closingBalance: 210,
      desc: "Refund",
      category: "Others",
    },
    {
      id: 9,
      amount: 10,
      type: "D",
      closingBalance: 200,
      desc: "Paid to shopping",
      category: "Shopping",
    },
  ],
  budgets: [
    { id: 1, accountnum: 123, totalcon: 10, budget: 100, Month: 5 },
    { id: 2, accountnum: 123, totalcon: 30, budget: 150, Month: 5 },
  ],
};
