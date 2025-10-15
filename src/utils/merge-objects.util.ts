export function mergeObjects<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}
