import React from 'react';

function BongMovie({title,year}) {
    return(
        //Home에서 props를 받아와서 html화면상에 정보를 rendering
        <div className="movie">
            <h1>{title}</h1>
            <h5>{year}</h5>
            <h5>봉준호</h5>

        </div>
    );
}

export default BongMovie;