import React from 'react'
import clsx from 'clsx'
import { useUser } from '@/contexts/UserContext'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


export default function FavFilter() {
  const { LoggedMail, FavBoolean, filterFavBoolean } = useUser()

  return (
    <button className={clsx(`
      flex opacity-0
      p-[0.5rem] 
      bg-gradient-to-br from-slate-500/30 to-slate-400/30
      rounded-full md:p-[1rem]
      `,
      LoggedMail && 'opacity-100',
    )} onClick = { () => filterFavBoolean() } >

      {FavBoolean === true? (
        <FaHeart className='fill-red-500' />
        ) : (
        <FaRegHeart className='fill-red-500' />
      )}

    </button>
  )
}
