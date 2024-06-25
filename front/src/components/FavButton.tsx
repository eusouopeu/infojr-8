import { useUser } from '@/contexts/UserContext'
import { addFavorite, removeFavorite } from '@/services/api'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavButtonProps } from '@/types'


export default function FavButton({
  movieId,
  title,
  voteAverage,
  releaseDate,
  originalLanguage,
  posterPath
}: FavButtonProps) {

  const { LoggedMail, FavArray, setFavArray } = useUser()

  if (FavArray && FavArray.some(fav => fav.title === title)) {
    
    return (
      <button className='bg-transparent' >
        <FaHeart className='fill-red-500 scale-[2]' onClick={ () => removeFavorite(LoggedMail, movieId, setFavArray) }/>
      </button>
    )

  } else {
    return (
      <button className='bg-transparent' >
        <FaRegHeart className='fill-red-500 scale-[2]' onClick={ () => addFavorite(LoggedMail, movieId, title, voteAverage, releaseDate, originalLanguage, posterPath, setFavArray) }/>
      </button>
    )
  }
}
