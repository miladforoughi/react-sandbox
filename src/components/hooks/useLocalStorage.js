import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (value) => {
    const valueStorage =
      value instanceof Function ? value(localStorageValue) : value

    setLocalStorageValue(value)

    localStorage.setItem(key, JSON.stringify(valueStorage))
  }

  return [localStorageValue, setValue]
}

const getLocalStorageValue = (key, initialValue) => {
  const itemFromStorage = localStorage.getItem(key)

  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
