import React from 'react'

function MonkeyTypeSection({data}) {
    console.log("monkey");
    console.log(data);
  return (
    <div className='w-full'>
    <div className="graph w-full flex justify-center">
      

      <div className='bg-gray-900  shadow-lg mt-2 rounded-md max-w-80 p-2     z-20 top-15'>
          <tr className='flex gap-5  '>
          <th className='text-zinc-400'>Accuracy</th>
          <th className='text-zinc-300'>Consistency</th>
          <th  className='text-zinc-400'>Typing Speed</th>
          </tr>
          <tr className='flex gap-5 w-60 text-center  justify-between'>
              <td className='text-zinc-400 text-center'>{isNaN(data?.accuracy.toFixed(0)) ? 0 : data?.accuracy.toFixed(0) }</td>
              <td className='text-zinc-300'>{isNaN(data?.consistency.toFixed(0)) ? 0 : data?.consistency.toFixed(0) }</td>
              <td className='text-zinc-400'>{isNaN(data?.typing_speed.toFixed(0)) ? 0 : data?.typing_speed.toFixed(0)  }</td>
          </tr>
          
      </div>


    </div>
  </div>
  )
}

export default MonkeyTypeSection
