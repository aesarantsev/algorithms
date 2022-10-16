export function swapArrayElements<T>(arr: T[], from: number, to: number) {
  [arr[from], arr[to]] = [arr[to], arr[from]];

  return arr;
}
