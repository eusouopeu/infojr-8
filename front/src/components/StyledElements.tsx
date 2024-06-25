import React from 'react'
import clsx from 'clsx'

interface BtnProps {
  className?: string
  type1?: boolean
  type2?: boolean
  onClick?: () => void
  children: React.ReactNode
}
export const Btn = ({
  className,
  type1 = false,
  type2 = false,
  onClick,
  children
}: BtnProps) => {

  return (
    <button className={clsx(`
      w-full px-[1rem] py-[0.25rem] 
      rounded-full text-center
      md:w-[9rem] md:shadow-md md:shadow-red-800 
    `,
      type1 && `bg-gradient-to-br from-rose-700 to-red-800`,
      type2 && `border-2 border-y-red-700 border-x-rose-800`,
    className )} onClick={onClick}>
      {children}
    </button>
  )
}