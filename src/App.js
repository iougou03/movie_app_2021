import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return( 
      <div>
        {isLoading ? "Loading...":
          movies.map(element => {
            console.log(element.id)
            return < Movie key={element.id} id={element.id} title={element.title} poster = {element.medium_cover_image} year={element.year} summary={element.summary}/>;
          })
        }
      </div>
      );  

  }
}

export default App;
