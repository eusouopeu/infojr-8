'use client'
import React from 'react'
//-- CONTEXTs
import { useModal } from '@/contexts/ModalContext'
import { useHMenu } from '@/contexts/HMenuContext'
//-- COMPONENTs
import Header from '@/components/Header'
import Generos from '@/components/Generos'
import Logar from '@/components/Logar'
import Cadastro from '@/components/Cadastro'
import Lista from '@/components/Lista'
import HMenu from '@/components/HMenu'
import clsx from 'clsx'


export default function Home() {
  const { ModalLogin, ModalSignup } = useModal()
  const { HMenuPrincipal } = useHMenu()


  return (
    <main className='
      flex flex-col justify-between
    '>

      <Header />
      <HMenu className={clsx(HMenuPrincipal && 'opacity-100 transition-all duration-1000')} />
      <Generos desktop className='md:flex'/>    

      <Lista />


      { ModalLogin ? (
        <Logar className='transition-opacity z-50 pointer-events-auto' />
        ) : (
        <Logar className='opacity-0 -z-10' />
      )}

      { ModalSignup ? (
        <Cadastro className='transition-opacity z-50 pointer-events-auto' />
        ) : (
        <Cadastro className='opacity-0 -z-10' />
      )}

    </main>
  )
}