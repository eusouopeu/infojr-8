'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { useUser } from './UserContext'
import { FiltroContextType, ContextProps } from '@/types'
import { fetchFavorites, fetchMoviesByTitle, fetchMoviesByGenre } from '@/services/api'

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: 'es',
  Genero: 28,
  Titulo: '',
  Filmes: [],
  filterIdioma: () => {},
  filterGenero: () => {},
  filterTitulo: () => {},
}

// Criando o contexto
const FiltroContext = createContext<FiltroContextType>(initialState)

// Criando o provider
export const FiltroProvider: React.FC<ContextProps> = ({ children }) => {
  const { LoggedMail, FavBoolean, FavArray, setFavArray } = useUser()
  
  const [Idioma, setIdioma] = useState('es')
  const [Genero, setGenero] = useState(28)
  const [Titulo, setTitulo] = useState('')
  const [Filmes, setFilmes] = useState<any[]>([])

  const filterIdioma = (e: string) => {
    setIdioma(e)
  }

  const filterGenero = (e: number) => {
    setGenero(e)
  }

  const filterTitulo = (e: any) => {
    setTitulo(e.target.value)
  }

  useEffect(() => {
    if (FavBoolean) {
      setFilmes(FavArray)
    } else if (Titulo != '') {
      fetchMoviesByTitle(Titulo, setFilmes)
    } else {
      fetchMoviesByGenre(Genero, Idioma, setFilmes)
    }
  }, [FavBoolean, Idioma, Genero, Titulo, FavArray, LoggedMail, setFavArray])

  return (
      <FiltroContext.Provider value={{ Idioma, Genero, Titulo, Filmes, filterIdioma, filterGenero, filterTitulo }}>
        {children}
      </FiltroContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext)