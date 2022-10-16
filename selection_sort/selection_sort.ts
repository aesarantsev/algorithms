import { swapArrayElements } from '../helpers/arrays';

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

  swapArrayElements(array, startFromIndex, minIndex);

  return selectionSort(array, startFromIndex + 1);
}
