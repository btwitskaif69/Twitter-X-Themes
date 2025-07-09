import React from 'react';
import { Button } from './ui/button';
import Login from './Login';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-center mb-4">It's free and only takes a minute</p>
        <form className="flex flex-col gap-4">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="First Name" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
          </div>
            <Button className="w-full bg-teal-600!">Submit</Button>
        </form>
        <p className="text-center mt-4">
          By clicking the sign up button you agree to our <br />
          <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
      <p className='py-4'>Already have and account? <a href="#">Login Form</a></p>
    </div>
  );
};

export default Signup;
