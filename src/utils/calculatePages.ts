/* eslint-disable @typescript-eslint/no-explicit-any */
export function totalPageNum(data: any[], pageSize: number) {
  return Math.ceil(data.length / pageSize);
}

export function paginatedData(
  data: any[],
  startIndex: number,
  pageSize: number
) {
  return data.slice(startIndex, startIndex + pageSize);
}
