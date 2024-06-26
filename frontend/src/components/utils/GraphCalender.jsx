import React from 'react'

function GraphCalender({ isShow }) {

    let data = new Array(30).fill(1)

    return (
        <div className={`bg-gray-900 shadow-lg mt-2 rounded-md max-w-60 p-2    z-20 top-15 ${!isShow && "hidden"}`}>
            <div className='flex gap-2'>
                <p className='font-mono uppercase' style={{ letterSpacing: "2px", textOrientation: "upright", writingMode: "vertical-rl" }}>Jun</p>
                <ul className='flex flex-wrap gap-1'>
                    <div className='block'>

                    </div>
                    {
                        data.map((item) => {
                            let colorIndex = ((Math.random() * 3) + 1).toFixed(0);
                            let color = colorIndex == 1 ? 'bg-zinc-50' : (colorIndex == 2 ? "bg-zinc-400" : (colorIndex == 3 ? "bg-zinc-700" : "bg-gray-800"))
                            return <li className={`${color}   rounded-sm w-3 h-3`}></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default GraphCalender