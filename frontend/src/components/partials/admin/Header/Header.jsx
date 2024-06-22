import React from 'react'
import Container from '../../../utils/Container'

function Header() {
  return (
    <header class="bg-zinc-50 text-center dark:bg-neutral-900">
      <Container>
        <nav class="flex py-5 w-full max-w-7xl items-center justify-between" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/assets/logo (2).png" alt="" />
            </a>
          </div>

          <div class=" lg:flex lg:justify-end">
            {/* <a href="#" class="text-sm font-semibold leading-6 text-zinc-50">Log in <span aria-hidden="true">&rarr;</span></a> */}
            <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="\assets\nikhil.jpg" alt="Bordered avatar" />
          </div>
        </nav>
      </Container>

    </header>

  )
}

export default Header
