import apiClient from "../client";
import {IUserData} from "../models/userDataUpload"

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const createUser = (body: IUserData) => apiClient({
  path: `users`,
  method: 'POST',
  data: body
})

export const updateUser = (body: IUserData, id: string) => apiClient({
  path: `users/${id}`,
  method: 'PUT',
  data: body
})
