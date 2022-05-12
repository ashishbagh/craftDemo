import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { accounts: [], budgets: [], transactions: [] },
  reducers: {
    addAccounts(state, action) {
      state.accounts = action.payload;
    },
    addBudgets(state, action) {
      state.budgets = action.payload;
    },
    addTransactions(state, action) {
      state.transactions = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice;
