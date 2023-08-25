export const isObjectEmpty = (obj: NonNullable<unknown>) => {
  return Object.keys(obj).length === 0
}
