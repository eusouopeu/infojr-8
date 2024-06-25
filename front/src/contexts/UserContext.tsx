'use client'
import { URL_BACK } from '@/services/api'
import axios from 'axios'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useFiltro } from './FiltroContext'
import { UserContextType, ContextProps } from '@/types'

// Estado inicial
const initialState: UserContextType = {
  LoggedMail: null,
  FavBoolean: false,
  FavArray: [],
  changeLoggedMail: (e: any) => {},
  filterFavBoolean: () => {},
  setFavArray: () => {}
}

// Criando o contexto
const UserContext = createContext<UserContextType>(initialState)

// Criando o provider
export const UserProvider: React.FC<ContextProps> = ({ children }) => {

  const [LoggedMail, setLoggedMail] = useState(() => {
    const savedLoggedMail = localStorage.getItem('LoggedMail')
    return savedLoggedMail ? JSON.parse(savedLoggedMail) : null
  })
  const [FavBoolean, setFavBoolean] = useState(false)
  const [FavArray, setFavArray] = useState<any[]>([])

  const changeLoggedMail = (item: string) => {
    setLoggedMail(item)
    localStorage.setItem('LoggedMail', JSON.stringify(item))
  }

  const filterFavBoolean = () => {
    if (LoggedMail != null) {
      setFavBoolean(!FavBoolean)
    }
  }

  return (
    <UserContext.Provider value={{ LoggedMail, FavBoolean, FavArray, changeLoggedMail, filterFavBoolean, setFavArray }}>
      {children}
    </UserContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useUser = () => useContext(UserContext)