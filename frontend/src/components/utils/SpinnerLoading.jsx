import React from 'react'

function SpinnerLoading({ isShow, title = "Please wait..." }) {
    return (
        <div className={`fixed w-full h-full bg-black flex justify-center items-center bg-opacity-55 top-0  left-0 right-0 ${!isShow && "hidden"}`}>
            <div className="loaderBox p-5 min-w-60 flex rounded-lg bg-white gap-5 items-center w-fit">
                <img src="/assets/1485.gif" width={"30px"} height={"30px"} alt="" />
                {title}
            </div>
        </div>
    )
}

export default SpinnerLoading