"use client";
import React, { useState } from "react";
import { userDetailsType } from "@/types/userDetails";
import axios from "axios";
const intial: userDetailsType = {
  id: "",
  email: "",
  username: "",
  password: "",
  classname: "First",
  department: "CS",
  role: "student",
  tablename: "FirstCSI",
};
function Signup() {
  const [user, setUser] = useState<userDetailsType>(intial);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(user.password)) {
      alert(
        "Password should contain at least 8 characters, one lowercase, one uppercase and one number."
      );
      return;
    }

    try {
      user.tablename = user.classname + user.department + "II";
      let res = await axios.post("/api/user/signup", user);
      alert(res.data.message);
    } catch (e) {
      alert("Unable to create User");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up Here</h1>
          
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">Registration Number</label>
            <input type="text" name="id" id="id" onChange={(e) => setUser({ ...user, id: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Type here" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter email" required />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" name="username" id="username" onChange={(e) => setUser({ ...user, username: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter name" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter password" required />
          </div>

          <div>
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
            <select name="classname" id="class" onChange={(e) => setUser({ ...user, classname: e.target.value })} defaultValue="I" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" required>
              <option value="First">I</option>
              <option value="Second">II</option>
              <option value="Third">III</option>
            </select>
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select name="department" id="department" onChange={(e) => setUser({ ...user, department: e.target.value })} defaultValue="CS" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50">
              <option value="CS">CS</option>
            </select>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select name="role" id="role" onChange={(e) => setUser({ ...user, role: e.target.value })} defaultValue="student" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
