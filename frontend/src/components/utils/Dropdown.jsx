import React from 'react'

function Dropdown({ title, items = [], onClick }) {
  return (
    <div className='w-full'>

      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   dark:focus:ring-blue-800" type="button">
        {title}
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {
            items.map((each) => {
              return <li>
                <a href="#" onClick={() => onClick(each?.title)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{each?.title}</a>
              </li>
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default Dropdown
