import React from 'react'
import Container from '../../../utils/Container'

function Header() {
  return (
    <header class="bg-zinc-50 text-center dark:bg-neutral-900">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 " aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/assets/logo (2).png" alt="" />
          </a>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-zinc-50">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>

    </header>

  )
}

export default Header
