export function filterByKey(items, key, value) {
  return items.filter((item) => item[key] === value);
}
