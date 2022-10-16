export function binarySearch<T>(
  arr: T[],
  item: T,
  _startIndex?: number,
  _endIndex?: number
): number {
  const startIndex = _startIndex || 0;
  const endIndex = _endIndex || arr.length;

  const middle = Math.floor((startIndex + endIndex) / 2);

  if (arr[middle] === item) {
    return middle;
  }

  if (item < arr[middle]) {
    return binarySearch(arr, item, 0, middle - 1);
  } else if (item > arr[middle]) {
    return binarySearch(arr, item, middle + 1, arr.length);
  }

  return -1;
}
