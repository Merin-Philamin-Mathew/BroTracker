import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-center  lg:text-left">
      <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
        © {new Date().getFullYear()} BroTracker Copyright:
        <a href="https://tw-elements.com/" className=' dark:text-white'>TW Elements</a>
      </div>
    </footer>
  )
}

export default Footer
