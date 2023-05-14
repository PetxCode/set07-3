import axios from "axios"


const url = 'https://codelab-hub.onrender.com'

export const getUserDetails = async (id: string) => {
    const getData = await axios.get(`${url}/api/auth/${id}`)
    return getData
}

export const getHistory = async (id: string) => {
    const getData = await axios.get(`${url}/api/booking/${id}/history`)
    return getData
}