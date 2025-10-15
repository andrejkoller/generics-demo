export function filterByKey<T, K extends keyof T>(
  items: T[],
  key: K,
  value: T[K]
): T[] {
  return items.filter((item) => item[key] === value);
}
