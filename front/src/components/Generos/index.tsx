import '@/app/globals.css'
import './styles.css'
import React from 'react'
//-- CONTEXTs
import { useFiltro } from '@/contexts/FiltroContext'
import { useHMenu } from '@/contexts/HMenuContext'
import { IdProps } from '@/types'
import clsx from 'clsx'
import { useUser } from '@/contexts/UserContext'


export default function Generos({
  className,
  desktop = false,
  ...restProps
}: IdProps) {
  const { Titulo, filterGenero } = useFiltro()
  const { HMenuGeneros, toggleHMenuGeneros } = useHMenu()
  const { FavBoolean } = useUser()

  if (desktop) {
    return (
      <form id='movie-gender' className={clsx(`
        hidden grid-rows-4 fixed top-[12.5rem] left-[2rem]
        w-[7rem] h-[19rem] py-[2.5rem] px-[1.75rem] gap-[1rem]
        bg-gradient-to-bl from-slate-300/30 to-slate-400/30 
        backdrop-blur-sm shadow-lg rounded-2xl list-none 
        md:grid
      `, className)} {...restProps}>
        
        <input id='adventure' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
        )} name='gender' type='radio' defaultChecked onClick={() => filterGenero(28)} />
        <label htmlFor='adventure' className='
          z-50 flex flex-col 
          py-[0.75rem] gap-[2rem] 
          text-xs duration-500
        '>
          Aventura
        </label>
        
        <input id='comedy' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
        )} name='gender' type='radio' onClick={() => filterGenero(35)} />
        <label htmlFor='comedy' className='
          z-50 flex flex-col 
          py-[0.75rem] gap-[2rem] 
          text-xs duration-500
        '>
          Comédia
        </label>

        <input id='drama' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
        )} name='gender' value='drama' type='radio' onClick={() => filterGenero(18)} />
        <label htmlFor='drama' className='
          z-50 flex flex-col 
          py-[0.75rem] gap-[2rem] 
          text-xs duration-500
        '>
          Drama
        </label>

        <input id='thriller' className={clsx(`
            hidden
          `,
            !(FavBoolean || Titulo !== '') && `ativo`
        )} name='gender' value='thriller' type='radio' onClick={() => filterGenero(53)} />
        <label htmlFor='thriller' className='
          z-50 flex flex-col 
          py-[0.75rem] gap-[2rem] 
          text-xs duration-500
        '>
          Suspense
        </label>

      { !(FavBoolean || Titulo !== '') && (
        <div className='
          indicador-genero 
          z-10 absolute top-[2.4rem] left-[1.4rem] 
          w-[8rem] h-[3rem] 
          bg-gradient-to-br from-red-500 to-red-900 
          border-8 border-black rounded-full
        '></div>
      )}

      </form>
    )

  } else {
    return (
      <li className='*:w-full'>
        <button className='bg-slate-800  p-[0.5rem]' onClick={toggleHMenuGeneros}> Gêneros </button>
        {HMenuGeneros && (
          <ul>
            <li>
              <button className='
                w-full p-[0.5rem]
                transition-all duration-1000
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(28) }>
                Aventura
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(35) }>
                Comédia
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(18) }>
                Drama
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(53) }>
                Suspense / Terror
              </button>
            </li>
          </ul>
        )}
      </li>
    )
  }
}
