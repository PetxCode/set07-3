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
export const signin = async (data: any) => {
    return await axios
        .post(`${url}/api/auth/sign-in`, data)

}

export const registerUser = async (data: any) => {
    return await axios
        .post(`${url}/api/auth/create`, data)

}