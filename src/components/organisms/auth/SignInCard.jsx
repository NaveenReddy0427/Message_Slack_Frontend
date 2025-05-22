import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignInCard = () => {

    const [signinForm, setSigninForm] = useState({
        email: '', 
        password: ''
    })

    const navigate = useNavigate()

  return (
    <>
    <Card className="w-full h-full">
        <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Sign In to access your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form className='space-y-3'>
                <Input 
                    placeholder="Email" 
                    required 
                    type='email'
                    disabled={false}
                    value={signinForm.email}
                    onChange = {(e)=>setSigninForm({...signinForm, email: e.target.value})}
                 />
                <Input 
                    placeholder="Password" 
                    required 
                    type='password'
                    disabled={false}
                    value={signinForm.password}
                    onChange = {(e)=>setSigninForm({...signinForm, password: e.target.value})}
                />
                <Button
                    disabled={false} 
                    className='w-full' 
                    size='lg' 
                    type='submit'
                    >
                        Continue
                </Button>
            </form>
            <Separator className='my-5'/>
            <p className='text-s text-muted-foreground mt-4'>
                Don't have an account ? {' '}
                <span className='text-sky-600 hover:underline cursor-pointer'
                onClick={()=>navigate('/auth/signup')}
                >Sign Up</span>
            </p>
        </CardContent>
    </Card>
    </>
  )
}

export default SignInCard