import React from 'react'
import UserRegisterForm from '../../sections/forms/UserRegisterForm'

function AddStudent() {
  return (
    <div class="flex min-h-full flex-col justify-center  py-12 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add Student Information</h2>
        </div>
       
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h2 class="text-base font-semibold leading-7 text-gray-900">Student Profile Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Ensure the address is accurate for receiving official documents.</p>

        <UserRegisterForm/>
        
            
        </div>
    </div>


    
  )
}

export default AddStudent
