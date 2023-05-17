import { Range } from "./range";

export const Generator = (totalCount: number, limit: number) => {
  return Range(1, Math.ceil(totalCount / limit));
};
