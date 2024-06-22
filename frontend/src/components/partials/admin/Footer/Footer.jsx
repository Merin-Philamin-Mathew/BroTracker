import React from 'react'

function Footer() {
  return (
    <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
      <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
        © {new Date().getFullYear()} BroTracker Copyright:
        <a href="https://tw-elements.com/" className=' text-green-500'>TW Elements</a>
      </div>
    </footer>
  )
}

export default Footer
