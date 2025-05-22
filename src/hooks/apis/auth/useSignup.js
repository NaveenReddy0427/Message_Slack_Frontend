import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/api/auth";

export const useSignup = () => {
    const { isPending, isSuccess, error, mutate: signupMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) =>{
            console.log("Signup successful:", data);
        },
        onError: (error) =>{
            console.error("Signup failed:", error);
        },
    })

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}