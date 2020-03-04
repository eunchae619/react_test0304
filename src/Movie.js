import React from 'react';


function Movie({title,year,summary200,summary100,image,rating}) {
    return(
        //Home에서 props를 받아와서 html화면상에 정보를 rendering
        <div className="movie">
            <img className="movie__img" src={image} alt={title}></img>
            <h1 className="movie__title">{title}</h1>
            <div className="yearNrating">
                <span className="movie__year">{year}</span>
                <span className="movie__rating">{rating} / 10.0</span>
            </div>
            <p className="movie__summary summary200">{summary200}....</p>
            <p className="movie__summary summary100">{summary100}....</p>
        </div>
    );
}

export default Movie;