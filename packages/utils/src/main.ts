export * as Constants from "./constant/constants";

export const mockArray = (length: number) =>
  Array.from({ length: length }, (_, i) => i + 1);
