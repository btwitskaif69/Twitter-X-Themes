import React from 'react'
import { Button } from './ui/button'

const Login = () => {

    
  return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-2">Login Form</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          </div>
            <Button className="w-full bg-teal-600!">Submit</Button>
        </form>
      </div>
        <p className='py-4'>Already have and account? <a href="#">Login Form</a></p>
    </div>
  )
}

export default Login