interface IDataResponse<T = null> {
  success: boolean
  data: T
}

interface IPayloadPagination {
  page: number
  limit: number
}

interface IPaginationDataResponse<T = null> {
  status?: number | null
  message?: string
  errorCode?: string
  data: T[]
}

export type { IDataResponse, IPayloadPagination, IPaginationDataResponse }
