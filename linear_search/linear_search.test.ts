import { describe, expect, test } from '@jest/globals';

import { linearSearch } from './linear_search';

const array = [1, 5, 6, 1, 8, 99, 11, 2, 55, 3, 6, 1];

describe('Linear search', () => {
  test('Should find an existing element', () => {
    expect(linearSearch(array, 2)).toBe(7);
  });

  test('Should not find non-existent element', () => {
    expect(linearSearch(array, 23)).toBe(-1);
  });

  test('Should not find NaN element', () => {
    expect(linearSearch(array, NaN)).toBe(-1);
  });
});
