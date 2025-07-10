import type { Category, CategorySummary } from "./category";

export enum TransactionType {
  EXPENSE = "expense",
  INCOME = "income",
}

export interface Transaction {
  id: string;
  userId: string;
  description: string;
  amount: number;
  date: string | Date;
  type: TransactionType;
  categpryId: string;
  category: Category;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface TransactionFilter {
  month: number;
  year: number;
  cateegory?: string;
  type?: TransactionType;
}

export interface TransactionsSummary {
  totalExpenses: number;
  totalincomes: number;
  balance: number;
  expensesByCategory: CategorySummary[];
}
