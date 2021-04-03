import "./App.css";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import logo from "./Components/logo.jpg"

function App() {
  const [ftext,setFtext] = useState("")
  const [frate,setFrate] = useState(1)
  const [movies, SetMovies] = useState([
    {
      id: uuidv4(),
      title: "Titanic",
      description:
        "Titanic is an American drama film written, produced and directed by James Cameron , released in 1997 .",
      posterURL:
        "http://www.babunga.alobi.cd/wp-content/uploads/2017/12/movieposter-279x400.jpg",
      rate: 4,
    },
    {
      id: uuidv4(),
      title: "Undisputed III",
      description:
        "Undisputed III:Redemption is a 2010 American action film directed by Isaac Florentine and starring Scott Adkins, Mykel Shannon Jenkins, Mark Ivanir and Hristo Shopov.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTc0YzA4YjQtZGZkMi00ZmRjLWFmM2ItMDcxZTYzZGU3ZTI1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
      rate: 5,
    },
    {
      id: uuidv4(),
      title: "Me Before You",
      description:
        "Me Before You is a 2016 romantic drama film directed by Thea Sharrock in her directorial debut and adapted by English author Jojo Moyes from her 2012 novel of the same name. The film stars Emilia Clarke, Sam Claflin, Janet McTeer, Charles Dance and Brendan Coyle.",
      posterURL:
        "https://images-na.ssl-images-amazon.com/images/I/610DJ7aHt4L._AC_SL1090_.jpg",
      rate: 4,
    },
  ]);
  const addMovie = (newMovie) => SetMovies([...movies, newMovie]);
  const deleteMovie = (id) => SetMovies(movies.filter((el) => el.id !== id));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width= "100px" height="100px"></img>
        <Navbar/>
        <Filter setftext={setFtext} setfrate={setFrate}/>
        <MovieList
           deleteMovie={deleteMovie} 
          movies={movies.filter((el) => el.title.includes(ftext) && el.rate >= frate)}
        />
        <AddMovie addMovie={addMovie} />
      </header>
    </div>
  );
}

export default App;
