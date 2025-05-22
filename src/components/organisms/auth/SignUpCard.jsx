import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { TriangleAlert } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SignUpCard = ({signupForm, setSignupForm, validationError, onSignupFormSubmit}) => {

    const navigate = useNavigate()

  return (
    <>
    <Card className="w-full h-full">
        <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Sign Up to access your account</CardDescription>
            {validationError && (
                <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-2'>
                    <TriangleAlert className='size-5' />
                    <p>{validationError.message}</p>
                </div>
            )}
        </CardHeader>
        <CardContent>
            <form className='space-y-3' onSubmit={onSignupFormSubmit}>

                <Input 
                    placeholder="Email" 
                    required 
                    onChange={(e)=>setSignupForm({...signupForm, email: e.target.value})}
                    value={signupForm.email} 
                    type='email'
                    disabled={false}
                />
                <Input 
                    placeholder="Password" 
                    required 
                    onChange={(e)=>setSignupForm({...signupForm, password: e.target.value})}
                    value={signupForm.password} 
                    type='password'
                    disabled={false}
                />
                <Input 
                    placeholder="Confirm Password" 
                    required 
                    onChange={(e)=>setSignupForm({...signupForm, confirmPassword: e.target.value})}
                    value={signupForm.confirmPassword} 
                    type='password'
                    disabled={false}
                />
                <Input 
                    placeholder="Your Username" 
                    required 
                    onChange={(e)=>setSignupForm({...signupForm, username: e.target.value})}
                    value={signupForm.username} 
                    type='text'
                    disabled={false}
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

            <Separator className='my-5' />

            <p className='text-s text-muted-foreground mt-4'>
                Already have an account ? {' '}
                <span className='text-sky-600 hover:underline cursor-pointer'
                onClick={()=>navigate('/auth/signin')}
                >Sign In</span>
            </p>
            
        </CardContent>
    </Card>
    </>
  )
}

export default SignUpCard