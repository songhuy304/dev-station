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

interface IErrorResponse {
  errorCode: string
  message: string
  statusCode: string
}

export type { IDataResponse, IPayloadPagination, IPaginationDataResponse, IErrorResponse }
