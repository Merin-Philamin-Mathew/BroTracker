import React from 'react'

function Container({ children }) {
  return (
    <div className='mx-auto lessThan404  px-10'>
      {children}
    </div>
  )
}

export default Container