import React from 'react'
import Dropdown from '../../../utils/Dropdown'
import SearchBar from '../../../utils/SearchBar'

function Filters() {
  return (
    <div className='py-5 grid lg:grid-cols-2 md:grid-cols-1 ' >
        <div className='flex justify-between'>
        <Dropdown/>
        <Dropdown/>
      <Dropdown/>
      <Dropdown/>
        </div>
     <div className='flex justify-end items-center'>
     <SearchBar/>
     


     <div>
      
     <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Add Student
  <svg class="w-4 h-4 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
</button>

      
    
      
          </div>
     </div>
     
      
    </div>
  )
}

export default Filters
