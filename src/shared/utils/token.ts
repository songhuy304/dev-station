import { LocalStorageHelper } from '../utils'

type TypeToken = 'at' | 'rft'

const setToken = (type: TypeToken, token: string) => {
  LocalStorageHelper.setItem<string>(type, token)
}
const getToken = (TypeToken: TypeToken) => LocalStorageHelper.getItem<string>(TypeToken)

const removeToken = (TypeToken: TypeToken) => LocalStorageHelper.removeItem(TypeToken)

export { getToken, setToken, removeToken }
