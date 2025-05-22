import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='flex h-screen w-full flex-col items-center justify-center bg-gray-100'>
            <Card className='text-center shadow-lg max-w-lg'>
                <CardHeader >
                    <CardTitle>
                        404 Not Found
                    </CardTitle>
                    <p 
                        className='text-gray-600'>
                        The page you are looking for does not exist
                    </p>
                </CardHeader>
                <CardContent>

                    <img
                        className='rounded-lg shadow-lg' 
                        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?semt=ais_hybrid&w=740" 
                    />

                    <Button
                        variant='outline'
                        className='mt-4'
                        onClick={()=>navigate(-1)}
                    >
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    </>
  )
}

export default NotFound