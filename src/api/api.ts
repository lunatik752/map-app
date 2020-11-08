import axios from "axios";

type ResponseType = {

}

const apikey = "cf257613-388c-495a-989f-98c40a840056"
const url = `https://geocode-maps.yandex.ru/1.x/`;

export  const getDataRequest = async (requestText: string) => {
    try {
        const data = await axios.get(url + `?format=json&geocode=${requestText}&apikey=${apikey}`)
        return data.data.response
    }
    catch (error) {
        console.log(error)
    }
}
