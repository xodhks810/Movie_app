import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, title, summary, poster, year, genres}) {
    return (
        <div className ="movies">
            <img src={poster} alt={title} title={title}></img> 
            <div className = "movie_data">
                <h3 className = "movies_title">{title}</h3>
                <h5 className = "movies_year">{year}</h5>
                <ul className = "movie_genres">{genres.map((genre, index) => (
                    <li key = {index} className = "genres.genre">
                        {genre}
                    </li>
                ))}
                </ul>
                <p className = "movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;