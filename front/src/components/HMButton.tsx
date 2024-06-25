import React from 'react'
import clsx from 'clsx'
import { useHMenu } from '@/contexts/HMenuContext'
import { IoMdClose, IoMdMenu } from 'react-icons/io'


export default function HMenuButton() {

  const { HMenuPrincipal, toggleHMenuPrincipal } = useHMenu()

  return (
    <button className='md:hidden' onClick={toggleHMenuPrincipal}>

      <IoMdClose className={clsx(`
          opacity-0
          fill-white scale-[2.5]
          transition-all duration-1000
        `, HMenuPrincipal && 'opacity-100' )} />

      <IoMdMenu className={clsx(`
          fill-white scale-[2.5]
          transition-all duration-1000
        `, HMenuPrincipal && 'opacity-0' )} />

    </button>
  )
}
