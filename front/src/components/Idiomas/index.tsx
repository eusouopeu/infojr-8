'use client'
import '@/app/globals.css'
import './styles.css'
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { IdProps } from '@/types'
//-- CONTEXTs
import { useFiltro } from '../../contexts/FiltroContext'
import { useHMenu } from '@/contexts/HMenuContext'
import { useUser } from '@/contexts/UserContext'
//-- ASSETs
import espanhol from '../../../public/espanhol.svg'
import italiano from '../../../public/italiano.svg'
import frances from '../../../public/frances.svg'
import alemao from '../../../public/alemao.svg'



export default function Idiomas({
  className,
  desktop = false,
  ...restProps
}: IdProps) {

  const { Titulo, filterIdioma } = useFiltro()
  const { HMenuIdiomas, toggleHMenuIdiomas } = useHMenu()
  const { FavBoolean } = useUser()

  if (desktop) {
    return (
        <form id='movie-language' className={clsx(`
          hidden grid-cols-4
          w-max h-[3rem] px-[3.5rem] pt-[0.75rem] gap-[5rem]
          bg-gradient-to-bl from-slate-300/30 to-slate-400/30 
          backdrop-blur-sm shadow-lg rounded-2xl list-none 
          md:grid
        `, className)} {...restProps}>

          <input id='spanish' name='language' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
          )} type='radio' defaultChecked onClick={() => filterIdioma('es')} />
          <label htmlFor='spanish' className='
            z-50 flex flex-col items-center
          '>
            <h2 className='
              absolute
              text-sm font-bold text-transparent duration-500
            '> Espanhol </h2>
            <span className='
              flex place-content-center 
              duration-500
            '>
              <Image src={espanhol} width={32} height={32} alt={'.'} />
            </span>
          </label>
          
          <input id='italian' name='language' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
          )} type='radio' onClick={ () => filterIdioma('it') } />
          <label htmlFor='italian' className='
            z-50 flex flex-col items-center
          '>
            <h2 className='
              absolute
              text-sm font-bold text-transparent duration-500
            '> Italiano </h2>
            <span className='
              flex place-content-center 
              duration-500
            '>
              <Image src={italiano} width={32} height={32} alt={'.'} />
            </span>
          </label>

          <input id='french' name='language' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
          )} type='radio' onClick={() => filterIdioma('fr')} />
          <label htmlFor='french' className='
            z-50 flex flex-col items-center
          '>
            <h2 className='
              absolute
              text-sm font-bold text-transparent duration-500
            '> Francês </h2>
            <span className='
              flex place-content-center 
              duration-500
            '>
              <Image src={frances} width={32} height={32} alt={'.'} />
            </span>
          </label>

          <input id='german' name='language' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
          )} type='radio' onClick={() => filterIdioma('de')} />
          <label htmlFor='german' className='
            z-50 flex flex-col items-center
          '>
            <h2 className='
              absolute
              text-sm font-bold text-transparent duration-500
            '> Alemão </h2>
            <span className='
              flex place-content-center 
              duration-500
            '>
              <Image src={alemao} width={32} height={32} alt={'.'} />
            </span>
          </label>

          { !(FavBoolean || Titulo !== '') && (
            <div className='
              indicador-idioma
              absolute z-40 top-8 left-[2rem]
              w-20 h-20
              bg-gradient-to-tr from-red-500 to-red-900
              border-8 border-black rounded-full
            '></div>
          )}

        </form>
      )

  } else {
    return (
      <li className={clsx('*:w-full', className )} {...restProps}>
        <button className='bg-slate-800 p-[0.5rem]' onClick={toggleHMenuIdiomas}> Idiomas </button>
        {HMenuIdiomas && (
          <ul>
            <li>
              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('es') }>
                Espanhol
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('it') }>
                Italiano
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('fr') }>
                Francês
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('de') }>
                Alemão
              </button>
            </li>
          </ul>
        )}
      </li>
    )
  }
}
