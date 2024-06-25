import React from 'react'
import clsx from 'clsx'
//-- CONTEXTs
import { useHMenu } from '@/contexts/HMenuContext'
import { useUser } from '@/contexts/UserContext'
//-- COMPONENTs
import FavFilter from './FavFilter'
import HMenu from './HMenu'
import Idiomas from './Idiomas'
import NavBar from './NavBar'
import HMButton from './HMButton'
import SearchBar from './SearchBar'
import Text from './Text'


export default function Header() {
  const { HMenuPrincipal, toggleHMenuPrincipal } = useHMenu()
  const { LoggedMail } = useUser()

  return (
    <div className='
      z-10 fixed flex flex-col gap-[1.5rem]
      w-screen h-fit py-[0.5rem] px-[1rem] 
      bg-black
      md:justify-start
    '>

      <div className='
        flex justify-between items-baseline
        w-[90%] mx-[4%] h-fit gap-[1rem]
        md:w-fit md:my-[1rem] md:mx-0 md:justify-start
      '>
        <Text as='h1' className='w-min h-min font-extrabold'>
          Cine<span className='text-red-700'>Glota</span>
        </Text>

        <div className='flex gap-[1rem] items-baseline'>
          <FavFilter />
          <HMButton />
        </div>

        <Idiomas desktop />
      </div>  
      
      <HMenu className={clsx(HMenuPrincipal && 'opacity-100 transition-all duration-1000')} />

      <div className='
        justify-self-end flex flex-col justify-between items-end
        w-full h-fit px-[4%] gap-[1rem]
        md:flex-row md:pr-[8rem] md:pl-0
      '>
        <NavBar desktop />
        <SearchBar />
      </div>

    </div>
  )
}
