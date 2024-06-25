import axios from 'axios'
import { FilterAny } from '@/types'

export const URL_BACK = `http://localhost:3005`
export const TMDB_IMG = `https://image.tmdb.org/t/p/w500`
export const TMDB_KEY = `e68628f5ff1c3314cd74c0ddba7a5819`

//-- FUNCTIONS
export const fetchMoviesByTitle = async (
  title: string,
  setFilmes: FilterAny
) => {
  axios.get(`${URL_BACK}/movie_by_title`, {
    params: { title }
  })
    .then(response => {
      setFilmes(response.data.results)
      console.log('Pesquisa realizada com sucesso!')
    })
    .catch(error => {
      console.error('Erro ao realizar pesquisa: ', error)
    })
}

export const fetchMoviesByGenre = async (
  genre: number,
  language: string,
  setFilmes: FilterAny
) => {
  axios.get(`${URL_BACK}/movie_by_genre`, {
    params: { genre: genre, language: language }
  })
    .then(response => {
      setFilmes(response.data.results)
      console.log('Filmes recuperados com sucesso!')
    })
    .catch(error => {
      console.error('Erro ao recuperar filmes: ', error)
    })
}


export const addFavorite = async (
  email: string | null,
  movieId: number,
  title: string,
  voteAverage: number,
  releaseDate: number,
  originalLanguage: string,
  posterPath: any,
  setFavArray: FilterAny
) => {
  if (email != null) {
    console.log( `
      ${email},	
      ${movieId},
      ${title},
      ${voteAverage},
      ${releaseDate},
      ${originalLanguage},
      ${posterPath}
    ` )
    axios.post(`${URL_BACK}/add_favorite`, {
      email: email,
      movie_id: movieId,
      title: title,
      vote_average: voteAverage,
      release_date: releaseDate,
      original_language: originalLanguage,
      poster_path: posterPath
    })
    .then(response => {
      console.log('Filme adicionado aos favoritos com sucesso! ', response)
      fetchFavorites(email, setFavArray)
    })
    .catch(error => console.error('Deu ruim: ', error))
  } else {
    alert('Faça o login primeiro!')
  }
}

export const removeFavorite = async (
  email: string | null,
  movieId: number,
  setFavArray: FilterAny
) => {
  if (email != null) {
    axios.post(`${URL_BACK}/remove_favorite`, {
      email: email,
      movie_id: movieId
    })
      .then(response => {
        console.log('Filme removido dos favoritos com sucesso! ', response)
        fetchFavorites(email, setFavArray)
      })
      .catch(error => console.error('Deu ruim: ', error))
    } else {
      alert('Faça o login primeiro!')
    }
}
  
export const fetchFavorites = (
  email: string | null, 
  setFavArray: FilterAny
) => {
  if (email != null) {
    axios.get(`${URL_BACK}/favorite_movies/${email}`)
      .then(response => {
        setFavArray(response.data)
        console.log('Filmes favoritos recuperados com sucesso!')
      })
      .catch(error => {
        console.error('Erro ao recuperar filmes favoritos: ', error)
      })
  } else {
    console.log('Faça o login primeiro!')
  }
}