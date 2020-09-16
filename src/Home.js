import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import './Home.css';

class Home extends React.Component {
    // state
    state = {
        movies: []
    }
    

    //영화목록 다운로드 과정
    async downloadMovies() {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({
            movies
        });
        console.log(movies);
    }
    
    componentDidMount() {
        this.downloadMovies();
    }
    

    //render
    render(){
        const {movies} = this.state;
        return (
            //Movie 컴포넌트에 props 넘기는 과정
            <div className="movies">
                {movies.map(movie =>(
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        summary200={movie.summary.slice(0,200)}
                        summary100={movie.summary.slice(0,100)}
                        image={movie.medium_cover_image}
                        rating={movie.rating}
                    />
                ))}
            </div>
        );
    }
    
}

export default Home;