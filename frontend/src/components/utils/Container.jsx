import React from 'react'

function Container({ children }) {
  return (
    <div className='mx-auto px-7 w-full max-w-7xl'>
      {children}
    </div>
  )
}

export default Container
