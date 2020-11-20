import axios from "axios";

const instance = axios.create({
    baseURL: 'https://search-maps.yandex.ru/v1/',
})
const apikey = "2fabdc58-1495-4a84-afef-ac1bc6f1f91c"

export const getSchools = async (requestText: string) => {
    const response = await instance.get(`?text=it школы ${requestText}&results=50&lang=ru_RU&apikey=${apikey}`)
    return response.data
}
