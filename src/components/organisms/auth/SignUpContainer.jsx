import { useState } from 'react'
import SignUpCard from './SignUpCard'

const SignUpContainer = () => {

    const [signupForm, setSignupForm] = useState({
        email: '', 
        password: '',
        confirmPassword: '',
        username: ''
    })

    const [validationError, setValidationError] = useState(null)

    async function onSignupFormSubmit(e){
        e.preventDefault()

        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username){
            setValidationError({message: 'All fields are required'})
            return
        }

        if(signupForm.password !== signupForm.confirmPassword){
            setValidationError({message: 'Passwords do not match'})
            return
        }
    }
    
  return (
    <>
        <SignUpCard 
            signupForm = {signupForm} 
            setSignupForm = {setSignupForm} 
            validationError = {validationError} 
            onSignupFormSubmit = {onSignupFormSubmit}
        />
    </>
  )
}

export default SignUpContainer