import React from 'react'

function AddButton({ title, onClick }) {
    return (
        <button onClick={onClick} data-dropdown-toggle="dropdown" style={{ fontSize: "revert" }} class=" text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            {title}
            <svg class="w-4 h-4 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
        </button>
    )
}

export default AddButton