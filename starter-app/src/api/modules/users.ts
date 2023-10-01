import apiClient from "../client";
import {IUserDataRequest} from "../models/userDataUpload"

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const createUser = (body: IUserDataRequest) => apiClient({
  path: `users`,
  method: 'POST',
  data: body
})

export const updateUser = (body: IUserDataRequest, id: string) => apiClient({
  path: `users/${id}`,
  method: 'PUT',
  data: body
})
