import axiosConfig from "@/config/axiosConfig";

//send data to the backend to create a new user
// this will return a token if the user is successfully created
// this will also return the user data
export const signUpRequest = async({ email, password, username })=>{
    try {
        const response = await axiosConfig.post('/users/signup', {
            email,
            password,
            username
        })
        return response.data
    } catch (error) {
        console.error("Error in signUpRequest:", error);
        throw error.response.data
        
    }
}

// send data to the backend to sign in a user
// this will return a token if the user is successfully signed in
export const signInRequest = async({ email, password })=>{
    try {
        const response = await axiosConfig.post('/users/signin', {
            email,
            password,
        })
        return response.data
    } catch (error) {
        console.error("Error in signInRequest:", error);
        throw error.response.data
    }
}