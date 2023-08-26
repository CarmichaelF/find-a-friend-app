export function removeDuplicatesFromArray<T>(
  array: T[],
  field?: keyof T,
): { filteredArray: T[]; hadDuplicates: boolean } {
  const uniqueArray = [
    ...new Map(array.map((v) => [field ? v[field] : v, v])).values(),
  ]

  return {
    filteredArray: uniqueArray,
    hadDuplicates: array.length !== uniqueArray.length,
  }
}
