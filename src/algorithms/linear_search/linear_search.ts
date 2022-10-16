export function linearSearch<T>(arr: T[], item: T) {
  for (const index of arr.keys()) {
    if (arr[index] === item) {
      return index;
    }
  }

  return -1;
}
