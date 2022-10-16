export function selectionSort(
  array: number[],
  _startFromIndex?: number
): number[] {
  const startFromIndex = _startFromIndex || 0;
  let minIndex = startFromIndex;

  if (startFromIndex === array.length) {
    return array;
  }

  for (let i = startFromIndex; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  [array[startFromIndex], array[minIndex]] = [
    array[minIndex],
    array[startFromIndex],
  ];

  return selectionSort(array, startFromIndex + 1);
}
