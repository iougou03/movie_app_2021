import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title,summary,poster,year,genres, rating, runtime}) {
    return(
        <div className="movie">
            <div className = "movieThumbnail">
                <img src={poster} alt={title} title={title}/>
                <div className="movieRating">
                    {rating}
                </div>
                <div className = "textBlock">
                    <p>{runtime}min </p>
                </div>
            </div>
            <div className="movie_data">
                <h3 className="movie_title" >{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">{genres.map((genre, index)=><li key={index} className="genres_genre">{genre}</li>)}</ul>
                <p className="movie_summary">{}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime : PropTypes.number.isRequired,
    rating : PropTypes.string.isRequired
};

export default Movie;