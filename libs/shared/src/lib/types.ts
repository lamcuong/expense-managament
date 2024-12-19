import { ObjectId } from 'mongoose';
import { ExpenseType } from './enum';

export type BaseEntity = {
  id: ID;
  createdAt: Date;
};
export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type BaseListResponse<T> = BaseResponse<ListResponse<T>>;

export interface BaseResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  status?: number;
}
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  limit: number;
  count: number;
}

export interface ListResponse<T> {
  list: T[];
  paging: PaginationInfo;
}

export interface BaseParams<T = unknown> {
  limit?: number;
  page?: number;
  search?: string;
  input?: T;
  id?: string;
}
export type ID = string | number | ObjectId;
export type Account = Entity<{
  name: string;
  initialBalance: number;
  balance: number;
}>;

export type Expense = Entity<{
  type: ExpenseType;
  transaction: {
    description: string;
    date: Date;
    amount: number;
  };
  category: string;
  account_id: string;
  id: string;
  created_at: string;
  updated_at: string;
}>;