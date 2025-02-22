"use client";
import React, { useState } from "react";
import { userDetailsType } from "@/types/userDetails";
import axios from "axios";
const intial: userDetailsType = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "student",
  admission_number: "",
  grade_level: "",
  date_of_birth: "",
  employee_id: "",
  department: "",
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
      let res = await axios.post("/api/user/signup", user);
      alert(res.data.message);
    } catch (e) {
      console.error("Error creating user:", e);
      alert("Unable to create User. Please check the console for more details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up Here</h1>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="first_name" id="first_name" onChange={(e) => setUser({ ...user, first_name: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter first name" required />
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="last_name" id="last_name" onChange={(e) => setUser({ ...user, last_name: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter last name" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter email" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter password" required />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select name="role" id="role" onChange={(e) => setUser({ ...user, role: e.target.value })} defaultValue="student" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {user.role === "student" && (
            <>
              <div>
                <label htmlFor="admission_number" className="block text-sm font-medium text-gray-700">Admission Number</label>
                <input type="text" name="admission_number" id="admission_number" onChange={(e) => setUser({ ...user, admission_number: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter admission number" required />
              </div>

              <div>
                <label htmlFor="grade_level" className="block text-sm font-medium text-gray-700">Grade Level/Class</label>
                <input type="text" name="grade_level" id="grade_level" onChange={(e) => setUser({ ...user, grade_level: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter grade level/class" required />
              </div>

              <div>
                <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" name="date_of_birth" id="date_of_birth" onChange={(e) => setUser({ ...user, date_of_birth: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" required />
              </div>
            </>
          )}

          {user.role === "teacher" && (
            <>
              <div>
                <label htmlFor="employee_id" className="block text-sm font-medium text-gray-700">Employee ID</label>
                <input type="text" name="employee_id" id="employee_id" onChange={(e) => setUser({ ...user, employee_id: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter employee ID" required />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <input type="text" name="department" id="department" onChange={(e) => setUser({ ...user, department: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50" placeholder="Enter department" required />
              </div>
            </>
          )}

          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
