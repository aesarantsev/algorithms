import { describe, expect, test } from '@jest/globals';

import { binarySearch } from './binary_search';

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

describe('Binary search', () => {
  test('Should find an existing element', () => {
    expect(binarySearch(array, 2)).toBe(1);
  });

  test('Should not find non-existent element', () => {
    expect(binarySearch(array, 23)).toBe(-1);
  });

  test('Should not find NaN element', () => {
    expect(binarySearch(array, NaN)).toBe(-1);
  });
});
