import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, deleteMovie}) => {
    return (
        <div className="moviesarea" style={{display:'flex',flexWrap: "wrap"}}>
            {movies.map((movie)=> <MovieCard movie={movie} deleteMovie={deleteMovie} key={movie.id}/>)}
        </div >
    )
}

export default MovieList