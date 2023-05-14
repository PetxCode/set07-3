import { useState, useEffect } from 'react'
import { getHistory } from '../utils/API'
import { useSelector } from 'react-redux'
import decode from "jwt-decode"

export const useGetHistory = () => {
    const userToken = useSelector((state: any) => state?.user)
    const [history, setHistory] = useState([] as any)
    let coded: any;

    if (userToken !== null) {
        coded = decode(userToken?.accessToken)
    }

    useEffect(() => {
        getHistory(coded?.id).then((res => {
            return setHistory(res.data.data)
        }))
    }, [coded?.id])

    return history
}