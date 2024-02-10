import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tv = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const uri = "https://api.themoviedb.org/3/discover/tv";

    // get movies
    const getMovies = async () => {

        setIsLoading(true)

        try {
            const movies = await fetch(uri, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGIzMTY5NWMwZTM5YWUxNTMzZDY1ZGQxYTdiMzM3OCIsInN1YiI6IjY1YzQwN2MyMTVjNjM2MDE4NDRjZGRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kotfObT2EB4ZQKThfUWV_D9-lVGwvGxBakQN8wJGgzw"
                }
            })
            const { results } = await movies.json()

            setMovies(results)
            setIsLoading(false)


        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getMovies()
    }, [])


    const movieList = {
        padding: "1rem",
        display: "grid",
        gridTemplateColumn: "1fr 1fr 1fr",
        width: "95%",
        justifyContent: "space-between",
        gap: "1rem"
    }

    // movie card style
    const cardStyle = {
        position: "relative",
        background: "#081C22",
        padding: ".5rem",
        color: "#21D07A"
    }

    const movieImgStyle = {
        borderRadius: "10px",
        objectFit: "cover"
    }

    const movieGraphic = {
        position: "relative"
    }

    const movieContent = {
        textTansform: "uppercase",
        width: "80%",
        margin: "1.5rem auto 0"
    }

    const ratingStyle = {

        top: 0,
        left: 0,
        position: "absolute",
        padding: "5px",
        fontSize: ".8rem",
        borderRadius: "50%",
        fontWeight: "bold",
        background: "#081C22",
        color: "#fff",
        border: "3px solid #21D07A"

    }

    const loadingStyle = {

        height: '100vh',
        width: "90vw",
        margin: "auto",
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }

    const textAlign = {
        textAlign: "center"
    }


    return (

        <>
            <h4 style={textAlign}>Tv</h4>
            <div style={movieList} className="movieList">


                {
                    isLoading ?
                        <div style={loadingStyle}>
                            <h1>Loading...</h1>
                        </div> :
                        movies.map((movie, i) => {
                            return (

                                <Link to={`tv/${movie.id}`} key={movie.id} >
                                    <div style={cardStyle}>

                                        <div style={movieGraphic}>
                                            <img src={"https://media.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path} alt="" width={"100%"} style={movieImgStyle} />

                                            <span style={ratingStyle}>{movie.vote_average.toFixed(1)}</span>
                                        </div>

                                        <div style={movieContent}>

                                            <h3>{movie.title}</h3>

                                        </div>

                                    </div>
                                </Link>

                            )
                        })
                }
            </div>
        </>
    )


}

export default Tv