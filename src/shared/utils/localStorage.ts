type LocalStorageHelperType = {
  setItem<T>(key: string, value: T): void
  getItem<T>(key: string): T | null
  removeItem(key: string): void
  clear(): void
}

export const LocalStorageHelper: LocalStorageHelperType = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem(key) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  },
  removeItem(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}
