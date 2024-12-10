import * as C from './calculatePages';
import { it, expect, describe } from 'vitest';

describe('totalPageNum', () => {
  it('should return the correct total page number when the data length is divisible by page size', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const pageSize = 2;
    const result = C.totalPageNum(data, pageSize);
    expect(result).toBe(3); // 6 / 2 = 3
  });

  it('should return the correct total page number when the data length is not divisible by page size', () => {
    const data = [1, 2, 3, 4, 5];
    const pageSize = 2;
    const result = C.totalPageNum(data, pageSize);
    expect(result).toBe(3); // 5 / 2 = 2.5 -> rounded up to 3
  });
});

describe('paginatedData', () => {
  it('should return the correct data slice based on start index and page size', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const startIndex = 0;
    const pageSize = 2;

    const result = C.paginatedData(data, startIndex, pageSize);

    expect(result).toEqual([1, 2]);
  });

  it('should return an empty array if data is empty', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = [];
    const startIndex = 0;
    const pageSize = 2;
    const result = C.paginatedData(data, startIndex, pageSize);
    expect(result).toEqual([]); // No data
  });
});
