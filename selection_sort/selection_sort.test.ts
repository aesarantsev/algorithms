import { describe, expect, test } from '@jest/globals';

import { selectionSort } from './selection_sort';

describe('Selection sort', () => {
  test('Should selection sort', () => {
    expect(selectionSort([-1, 2, 10, -5, 3, 1, -5, 10])).toStrictEqual([
      -5, -5, -1, 1, 2, 3, 10, 10,
    ]);
  });

  test('Should selection sort with identical elements', () => {
    expect(selectionSort([1, 1, 1])).toStrictEqual([1, 1, 1]);
  });

  test('Should selection sort with sorted elements', () => {
    expect(selectionSort([-1, -1, 0, 0, 2, 3, 100])).toStrictEqual([
      -1, -1, 0, 0, 2, 3, 100,
    ]);
  });
});
