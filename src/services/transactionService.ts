import type { Transaction, TransactionFilter, TransactionsSummary } from "../types/transactions";
import { api } from "./api";

export const getTransactions = async (
  filter?: Partial<TransactionFilter>,
): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>("/Transactions", {
    params: filter,
  });

  return response.data;
};

export const getTransactionsSummary = async (
  month: number,
  year: number,
): Promise<TransactionsSummary> => {
  const response = await api.get<TransactionsSummary>("/transactions/summary", {
    params: { month, year },
  });

  return response.data;
};
