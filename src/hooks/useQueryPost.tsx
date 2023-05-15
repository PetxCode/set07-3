import Swal from "sweetalert2"
import { useMutation } from "@tanstack/react-query"
import { updateUserInfo } from "../utils/API";
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const useQueryPost = (id: string, value: any) => {
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationKey: ["fetchData"],

        mutationFn: () => updateUserInfo(id, value),

        onSuccess: () => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your account has been created successfully",
                showConfirmButton: false,
                timer: 2500,
            }).then(() => {
                navigate("/dashboard");
            });
            setLoading(false);
        },

        onError: (error: any) => {
            Swal.fire({
                title: error.response.data.message,
                text: `Please check and fix this ERROR`,
                icon: "error",
                showConfirmButton: false,
                timer: 3500,
            }).then(() => {
                setLoading(false);
            });
        }

    })

    return mutation

}

