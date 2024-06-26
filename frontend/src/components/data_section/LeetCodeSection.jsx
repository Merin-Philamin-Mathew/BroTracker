import React from 'react'

function LeetCodeSection({data}) {

    console.log("leetcode");
    console.log(data);
  return (
    <div className='w-full'>
    <div className="graph w-full flex justify-center">
      

      <div className='bg-gray-900  shadow-lg mt-2 rounded-md max-w-64 p-2     z-20 top-15'>
          <tr className='flex gap-5  '>
          <th className='text-cyan-600'>Easy</th>
          <th className='text-amber-600'>Medium</th>
          <th  className='text-red-700'>Hard</th>
          <th  className='text-zinc-400'>Badges</th>
          </tr>
          <tr className='flex gap-5 w-52 text-center  justify-between'>
              <td className='text-cyan-600'>{data?.problems.easySolved}</td>
              <td className='text-amber-600'>{data?.problems.mediumSolved}</td>
              <td className='text-red-700'>{data?.problems.hardSolved}</td>
              <td className='text-zinc-400'>{data?.badges}</td>
          </tr>
          
      </div>


    </div>
  </div>
  )
}

export default LeetCodeSection
