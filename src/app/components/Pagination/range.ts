export const Range = (start: number, end: number) => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};
