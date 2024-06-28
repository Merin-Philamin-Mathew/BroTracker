import React from 'react'

function CustomeModal({ isOpen, closeOnClick, children, title }) {


    function onModelOutSideClick(e) {
        if (e.target === e.currentTarget) {
            closeOnClick();
        }
    }

    return (
        <div onClick={onModelOutSideClick} className={`${!isOpen && "hidden"} w-full fixed top-0 right-0 left-0 bg-black flex items-center justify-center bg-opacity-80 z-50 h-full`}>
            <div className='relative bg-gray-800 rounded-lg min-w-96'>
                <div className="titleModal flex justify-between p-5 text-white items-center">
                    <h4>{title}</h4>
                    <button onClick={() => closeOnClick()} className='text-white'>X</button>
                </div>
                <div className='p-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CustomeModal