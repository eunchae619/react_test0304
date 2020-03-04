import React from 'react';
import axios from 'axios';
import BongMovie from './BongMovie.js';


class Bong extends React.Component {
    // state
    state = {
        movies: []
    }

    //영화목록 다운로드 과정
    async downloadMovies() {
        const {data:{movieListResult:{movieList}}} = await axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=b0f9efdf7dba27487cec4d21f39f4738&directorNm=%EB%B4%89%EC%A4%80%ED%98%B8");
        this.setState({
            movies:movieList
        })
    }
    
    componentDidMount() {
        this.downloadMovies();
    }
    

    //render
    render(){
        const {movies} = this.state;
        return (
            // Movie 컴포넌트에 props 넘기는 과정
            <div className="movies">
                {movies.map(movie => (
                    <BongMovie
                        key={movie.movieCd}
                        title={movie.movieNm}
                        year={movie.prdtYear}
                    />
                ))}
            </div>
        );
    }
    
}

export default Bong;