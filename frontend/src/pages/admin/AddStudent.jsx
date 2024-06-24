import React from 'react'
import UserRegisterForm from '../../sections/forms/UserRegisterForm'

function AddStudent() {
  return (
    <div class="flex min-h-full flex-col justify-center  py-12 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="\assets\mag_lens.png" alt="Your Company"/>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">Add Student Information</h2>
        </div>
       
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h2 class="text-base font-semibold leading-7 text-slate-300">Student Profile Information</h2>
        <p class="mt-1 text-sm leading-6 text-slate-500">Ensure the address is accurate for receiving official documents.</p>

        <UserRegisterForm/>
        
            
        </div>
    </div>


    
  )
}

export default AddStudent
