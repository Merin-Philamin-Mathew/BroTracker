import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addStudent, getBatch } from '../../apis/firebase/student_details';
import { userRegForm_Data } from './data';



function UserRegisterForm() {
    const [batches, setBatches] = useState([])
    
    useEffect(async ()=>{
        try{
            let batchesArray = await getBatch()
            setBatches(batchesArray)
        }catch(e){
            console.log("Batches unavailable: ", e)
        }
    },[])
  return (
    <div>
        <Formik
        
            initialValues={userRegForm_Data.INITIAL_VALUES}
            validationSchema={userRegForm_Data.VALIDATION_SCHEMA}
            onSubmit={async (val)=>{
                try{
                    await addStudent(val)
                    alert("Form has been submitted")
                }
                catch(e){
                    console.log("Error:",e)
                }
                
            }}
        >
         <Form >
            <div className="space-y-12">
                

                <div className="border-b border-gray-100/10 pb-12">
             
                <div className="mt-10 bg-op grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                    <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-slate-400">First name</label>
                    <div className="mt-2">
                        <Field type="text" 
                                name="firstName"   
                                id="firstName" 
                                autoComplete="given-name" 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                             />
                        <ErrorMessage component={'div'} className='text-red-700' name='firstName'></ErrorMessage >

                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-slate-400">Last name</label>
                    <div className="mt-2">
                        <Field type="text" 
                        name="lastName"  
                        id="lastName" 
                        autoComplete="family-name" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                        />
                       <ErrorMessage component={'div'} className='text-red-700' name='lastName'></ErrorMessage >

                    </div> 
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-400">Email address</label>
                    <div className="mt-2">
                        <Field id="email" 
                        name="email"  
                        type="email" 
                        autoComplete="email" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6" 
                         />
                        <ErrorMessage component={'div'} className='text-red-700' name='email'></ErrorMessage >

              
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-slate-400">Phone Number</label>
                    <div className="mt-2">
                        <Field type="text" 
                        name="phoneNumber"   
                        id="phoneNumber" 
                        autoComplete="phoneNumber" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                        />
                       <ErrorMessage component={'div'} className='text-red-700' name='phoneNumber'></ErrorMessage >
 
                    </div>
                    </div>
                    
                   

                    <div className="sm:col-span-3">
                    <label htmlFor="batch" className="block text-sm  font-medium leading-6 text-slate-400">Batch</label>
                    <div className="mt-2">
                        <Field  as="select" id="batch" name="batch"  autoComplete="batch-name" className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option className='text-base font-medium leading-6'>Select Batch</option>
                        {batches.map((batch,index)=>(
                          <option key={index}  name='batch' id='batch' className='text-base  font-medium leading-6'>{batch}</option>
                        ))}
                        </Field>
                        <ErrorMessage component={'div'} className='text-red-700'  name='batch'></ErrorMessage >

                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="githubUsername" className="block text-sm font-medium leading-6 text-slate-400">GitHub Username</label>
                    <div className="mt-2">
                        <Field type="text" 
                        name="githubUsername" 
                        id="githubUsername" 
                        autoComplete="githubUsername" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                        />
                       <ErrorMessage component={'div'} className='text-red-700' name='githubUsername'></ErrorMessage >
                       </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="leetcodeUsername" className="block text-sm font-medium leading-6 text-slate-400">LeetCode Username</label>
                    <div className="mt-2">
                        <Field type="text" 
                        name="leetcodeUsername" 
                        id="leetcodeUsername" 
                        autoComplete="leetcodeUsername" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                        />
                       <ErrorMessage component={'div'} className='text-red-700' name='leetcodeUsername'></ErrorMessage >
                       </div>
                    </div>
                   
                    <div className="col-span-full">
                    <label htmlFor="monkeytypingUsername" className="block text-sm font-medium leading-6 text-slate-400">Monkeytype Username</label>
                    <div className="mt-2">
                        <Field type="text" 
                        name="monkeytypingUsername" 
                        id="monkeytypingUsername" 
                        autoComplete="monkeytypingUsername"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                        />
                       <ErrorMessage component={'div'} className='text-red-700' name='leetcodeUsername'></ErrorMessage >

                    </div>
                    </div>
                
                </div>
                </div>

            
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-slate-400 px-3">Cancel</button>
                <button   type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
            </Form>
        </Formik>
    </div>
  )
}

export default UserRegisterForm
