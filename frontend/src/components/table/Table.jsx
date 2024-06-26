import React, { useEffect, useState } from 'react'
import { getAllStudentProfile } from '../../apis/firebase/student_details'

function Table() {
 
    const [student_details, setStudent_details] = useState([])

    useEffect(()=>{
        getAllStudentProfile().then((data)=>{
            setStudent_details(data.student_list)
    
        }).catch((e)=>{
            console.log(e.status,e.msg)
        })
    },[])
 
    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Batch
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <img
                            className="h-9 w-9"
                            title='github'
                            src="\assets\github.png"
                            alt="nature image"
                            />
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <img
                            className="h-9 w-8"
                            title='leetcode'
                            src="\assets\LeetCode_logo_white.png"
                            alt="nature image"
                            />
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <img
                            className="h-9 w-9 object-cover rounded-full"
                            title='monkeytype'
                            src="\assets\monkeytype.png"
                            alt="nature image"
                            />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            student_details.map((student) => {
                                return (
                                    <tr class="bg-white odd:bg-gray-800 border-b even:bg-gray-700 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium capitalize text-gray-900 whitespace-nowrap dark:text-white">
                                            {student.firstName + " " + student.lastName} 
                                        </th>
                                        <td class="px-6 py-4">
                                            {student.batch}
                                        </td>
                                        <td class="px-6 py-4">
                                          
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>



            <div className='mt-5'>
                <nav class="flex justify-center">
                    <ul class="inline-flex -space-x-px text-base h-10 overflow-auto">
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>

    )
}

export default Table