export function getSelectOptions(filters: any, filter: string) {
  if (!filters) return []
  if (filter in filters === false) return []
  return Object.values<string>(filters?.[filter]).map((option) => ({
    label: option,
    value: option,
  }))
}
