import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import decode from "jwt-decode"
import { getUserDetails } from '../utils/API'

export const useGetUser = () => {
    const userToken = useSelector((state: any) => state?.user)
    const [newUser, setNewUser] = useState({})
    let coded: any;

    if (userToken !== null) {
        coded = decode(userToken?.accessToken)
    }

    useEffect(() => {
        getUserDetails(coded?.id).then((res: any) => {
            // console.log(res.data.data)
            return setNewUser(res.data.data)
        })
    }, [coded?.id])

    return newUser
}