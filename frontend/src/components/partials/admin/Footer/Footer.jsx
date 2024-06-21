import React from 'react'

function Footer() {
  return (
    <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
      <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
        © {new Date().getFullYear()} Bro Tracker Copyright
      </div>
    </footer>
  )
}

export default Footer
