import React from 'react'

function Container({ children }) {
  return (
    <div className='mx-auto lg:px-36 md:px-20 px-10'>
      {children}
    </div>
  )
}

export default Container

