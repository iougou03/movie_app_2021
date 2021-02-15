import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  };
  
  getMovies = async() =>{
    const {data:{
       data: { movies }
        } 
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      this.setState({ movies , isLoading : false}); 

      // console.log(movies);
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return( 
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ):( 
          <div className="box">
            <div className="headerBox">
              <img src="https://www.gstatic.com/youtube/img/tvfilm/movies_profile.png" alt=""/>
              <span className="headerText"> 영화 </span>
            </div>
            <div className="movies">
              { movies.map(function(movie){
                  let temp = String(movie.rating);
                  if(temp.length<3){
                    temp+=".0";
                  }
                  movie.rating =temp;

                  return(
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    rating={movie.rating}
                    runtime={movie.runtime}
                  />
                  );
                })
              }
            </div>
          </div>
          
        )}
      </section>
      );  
  }
}

export default App;
