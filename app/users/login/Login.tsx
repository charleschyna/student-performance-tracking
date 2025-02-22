"use client"
import React, { useState } from 'react'
import { loginDetailsType } from "@/types/userDetails"
import axios from "axios"
import { useCookies } from 'react-cookie'

const inital: loginDetailsType = {
  email: '',
  password: ''
}

function Login() {
  const [user, setUser] = useState<loginDetailsType>(inital);
  const [cookie, SetCookie] = useCookies(["token"])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let res = await axios.post("/api/user/login", user)
      window.localStorage.setItem("user", JSON.stringify(res.data.user))
      SetCookie('token', res.data.token, { path: '/' });
      alert("User logged In Successfull")
      window.location.href = "/dashboard";
    } catch (e) {
      alert("Unable to login user" + e)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className='text-2xl font-bold text-center'>Login Page</h1>

          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder='Enter email' />
          </div>

          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder='Enter password' />
          </div>

          <button type="submit" className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
