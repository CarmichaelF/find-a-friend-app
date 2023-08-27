'use client'

import { LOCALSTORAGE } from '@/constants/localStorage'

type SaveToLocalStorageProps = {
  key: LOCALSTORAGE
  value: NonNullable<unknown>
}

type RetrieveFromLocalStorageProps = {
  key: LOCALSTORAGE
}

export const saveToLocalStorage = ({ key, value }: SaveToLocalStorageProps) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const retrieveFromLocalStorage = <T>({
  key,
}: RetrieveFromLocalStorageProps) => {
  const localStorageState = localStorage.getItem(key)
  if (localStorageState) {
    const stateParsed = JSON.parse(localStorageState)
    return stateParsed as T
  }
  return null
}
