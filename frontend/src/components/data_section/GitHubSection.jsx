import React from 'react'
import GraphCalender from '../utils/GraphCalender'

function GitHubSection({data}) {
  return (
    <div className='w-full'>
      <div className="graph w-full flex justify-center">
        

        <div className='bg-gray-900  shadow-lg mt-2 rounded-md max-w-60 p-2     z-20 top-15'>
            <tr className='flex gap-5  '>
            <th  className='text-zinc-400'>Push</th>
            <th className='text-zinc-300'>Pull</th>
            <th className='text-zinc-400'>Commits</th>
            </tr>
            <tr className='flex gap-5 w-32 text-center  justify-between'>
                <td className='text-zinc-400'>{data.push}</td>
                <td className='text-zinc-300'>{data.pull}</td>
                <td className='text-zinc-400'>{data.commits}</td>
            </tr>
            
        </div>


      </div>
    </div>
  )
}

export default GitHubSection
