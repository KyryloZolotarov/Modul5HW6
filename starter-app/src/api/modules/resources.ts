import apiClient from "../client";

export const getById = (resourceName: string, id: string) => apiClient({
  path: `${resourceName}/${id}`,
  method: 'GET'
})

export const getResources = (resourceName: string) => apiClient({
  path: `${resourceName}`,
  method: 'GET'
})