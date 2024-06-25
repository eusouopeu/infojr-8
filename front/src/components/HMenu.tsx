import React from 'react'
import clsx from 'clsx'
import { HMenuProps } from '@/types'
//-- COMPONENTs
import Idiomas from './Idiomas'
import Generos from './Generos'
import NavBar from './NavBar'


export default function HMenu({
  className,
  ...restProps
}: HMenuProps) {

  return (
    <ul className={clsx(`
      z-40 opacity-0 flex flex-col fixed  
      w-full mt-[3.5rem] 
      bg-slate-700 shadow-md shadow-red-900
      transition-all duration-1000 
      md:hidden
    `, className )} {...restProps}>

      <Idiomas />
            
      <Generos />
      <div className='flex justify-center py-2 bg-slate-700'>
        <NavBar className='flex' />
      </div>

    </ul>
  )
}
