import React, { useState } from 'react'
import { ErrorMessage, Form, Formik, Field } from 'formik'
import { toast } from 'react-toastify'
import { userRegForm_Data } from './data'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import { setUser } from '../../redux/user';

function Admin_Login_Form() {
    const navigate = useNavigate()
    const auth = getAuth();
    const dispatch = useDispatch() 
    
  return (
    <div>
      <Formik
            initialValues = {userRegForm_Data.CREDENTIALS}
            validationSchema = {userRegForm_Data.CREDENTIALS_VALIDATION_SCHEMA}
            onSubmit = { async (val,{resetForm}) => {
                    try {
                        const userCredential = await signInWithEmailAndPassword(auth, val.email, val.password)
                        const user_data = userCredential.user
                        console.log("yyyyyyyy",user_data)
                        localStorage.setItem('user_data',user_data)
                        dispatch(setUser(user_data))      
                        navigate('/admin')    
                    }
                    catch(error){
                        console.log("error",error)
                    }
                }

            }
            >
            <Form >
                    <div className="space-y-12">
                        <div className="border-b border-gray-100/10 pb-12">
                            <div className=" bg-op grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                                
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
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-400">Password</label>
                                    <div className="mt-2">
                                        <Field type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='password'></ErrorMessage >
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                </Form>
         </Formik >
    </div>
  )
}

export default Admin_Login_Form
