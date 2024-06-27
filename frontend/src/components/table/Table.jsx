import React, { useEffect, useState } from 'react'
import { getAllStudentProfile } from '../../apis/firebase/student_details'
import GraphCalender from '../utils/GraphCalender'
import Data_Section from '../data_section/Data_Section'

function Table() {

    const [student_details, setStudent_details] = useState([])

    const icons = [
        {className : "h-9 w-9",
            title : 'github',
            src : "/assets/github.png",},
        {className : "h-9 w-8",
            title : 'leetcode',
            src : "/assets/LeetCode_logo_white.png",
            },
        {className : "h-9 w-9 object-cover rounded-full",
            title : 'monkeytype',
            src : "/assets/monkeytype.png",}
    ]

    const [currentIconIndex, setCurrentIconIndex] = useState(0);
  
    const handeIconClick = () => {
        setCurrentIconIndex((prevIndex) => (prevIndex+1) % icons.length)
    }

    const currentIcon = icons[currentIconIndex]
    useEffect(() => {
        getAllStudentProfile().then((data) => {
            setStudent_details(data.student_list)

        }).catch((e) => {
            console.log(e.status, e.msg)
        })
    }, [])

    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3"></th>
                            <th scope="col" class="px-4 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Batch
                            </th>
                            <th scope="col" class="px-6 py-3 flex justify-center">

                                <div onClick={handeIconClick}>
                                    <img
                                        className={currentIcon.className}
                                        title={currentIcon.title}
                                        src={currentIcon.src}
                                        alt={`${currentIcon.title} icon`}
                                    />
                                </div>
                                
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student_details.map((student, index) => {
                                return (
                                    <tr class="bg-white odd:bg-gray-800 border-b even:bg-gray-700 dark:border-gray-700">
                                        <td class="pl-5 relative font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">{index+1}.</td>
                                        <td scope="row" class="px-4 py-4 relative font-medium capitalize text-gray-900 whitespace-nowrap dark:text-zinc-50">
                                         {student.firstName + " " + student.lastName}

                                        </td>
                                        <td class="px-6 py-4 ">
                                            {student.batch}
                                        </td>
                                        <td class="px-6 py-4">
                                            <Data_Section icon={currentIcon.title} data={student}/>
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