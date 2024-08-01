import React from 'react'
import Admin_Login_Form from '../../sections/forms/Admin_Login_Form'
import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
    <div class="flex min-h-full flex-col justify-center  py-12  h-screen">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img class="mx-auto h-10 w-auto" onClick={return_dashboard} src="\assets\mag_lens.png" alt="Your Company"/> */}
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">Admin Login</h2>
        </div>    
        <div class="mx-10 mt-10  mb-4 sm:mx-auto sm:w-full sm:max-w-sm  max-w-sm p-6 border rounded-lg shadow dark:bg-slate-700 dark:border-gray-700 dark:hover:bg-gray-700">

        <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
       
        
        <Admin_Login_Form/>
        
        </div>
        </div>
          <span className='text-center text-slate-300 flex justify-center '>
          Forgot Password? <Link className='text-orange-400'> Reset Password</Link>
            </span>  
    </div>
  )
}

export default AdminLogin
