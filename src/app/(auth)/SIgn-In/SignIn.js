import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const SignIn = () => {
  return (
    <Card className="w-96 items-center justify-center m-60">
        <CardHeader>
            <CardTitle>Sign-In</CardTitle>
            <CardDescription>please sign in here...</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <input type="text" placeholder="Email"/><br></br>
                <input type="password" placeholder="Password" className='mt-5'/>
            </form>
        </CardContent>
        <CardFooter>
            <button type="submit" className='w-full bg-black text-white rounded-sm p-1'>Sign In</button>
        </CardFooter>
    </Card>
  )
}

export default SignIn