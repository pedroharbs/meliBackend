
import axios from 'axios'
import config from '../configs/environment.config'

const api = axios.create({
  baseURL: config.apis.meli.url,
})

export const searchItem = async (query: any, limit: any) => {
    return await api.get(`${config.apis.meli.url}/sites/${config.apis.meli.region}/search?q=${query}&limit=${limit ? limit : config.apis.meli.limit}`);
}

export const getItem = async (itemId: string) => {
    return await api.get(`${config.apis.meli.url}/items/${itemId}`);
}

export const getItemDescription = async (itemId: string) => {
    return await api.get(`${config.apis.meli.url}/items/${itemId}/description`);
}

export const getCategoriesById = async (categoryId: string) => {
    return await api.get(`${config.apis.meli.url}/categories/${categoryId}`);
}
