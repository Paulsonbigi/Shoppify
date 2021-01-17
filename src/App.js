import React, { useEffect, useState, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Container, Row, Spinner, Alert, UncontrolledAlert } from "reactstrap"
import MovieList from "./components/MovieList"
import InputSearch from "./components/InputSearch"
import NomineeComp from "./components/AddToList"
import RemoveSvg from "./components/RemoveNominee"
import ListHeading from "./components/ListHeading"
const App =() => {

  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([]);
  const [ search, setSearch] = useState("")
  const [errMsg, setErrMsg] = useState(null)
  const [nominated, setNominated] = useState([])
  const [visible, setVisible] = useState(true)

  const onDismiss = () => setVisible(false)

  const MovieRequest = async(search) => {
    setLoading(true)
    
    const url = `https://www.omdbapi.com/?s=${search}s&apikey=f489ec74`;
  
    await axios.get(url)
      .then(res => {
        const result = res.data

        
        if(result.Search){
          setMovies(result.Search)
          setLoading(false)
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    MovieRequest(search);  
    console.log(nominated)
    
  }, [search])

  const movieNominated = (movie) => {

    const alreadyNominated = nominated.map(one => one.Title)
    if(!alreadyNominated.includes(movie.Title)){
      const newMovies = [...nominated, movie]
      if(newMovies.length < 6) {
        return setNominated(newMovies)
      }
      
    }
    else{
      setErrMsg({ errMsg: "Movie already nominated"})
      console.log("Movied already nominated")
    }
    
    
  }

  const maxNomination = (
    <UncontrolledAlert color="primary">Maximum nomination is 5!</UncontrolledAlert>
  )
  const alreadyExists = (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>Movie already nominated</Alert>
  )

  const removeNominee = (movie) => {
		const newNominees = nominated.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setNominated(newNominees);
	};
  return (
    <Container>
      <div className='justify-content-md-center mt-6 mb-4'>
				<h4 className="mb-4 mt-4 brand">The Shoppies</h4>
        { nominated.length >=5 ? maxNomination : ""}
        { errMsg ? alreadyExists : ""}
				<InputSearch search={search} setSearch={setSearch} />
			</div>
      <Fragment>
        <ListHeading heading="Movies"/>
          {
            loading ? 
            <div className="spinner">
              <Spinner  color="primary"/>
            </div>
             :
            (
              <Row>
                <MovieList
                  movies={movies}
                  NomineeComp={NomineeComp}
                  handleClick={movieNominated}/>
              </Row>
            )
          }
      </Fragment>

      <Fragment>
        <ListHeading heading={`Nominated ${nominated.length > 1 ? "Movies" : "Movie"}`}/>
        
          <Row className="justify-content-center nominated">
                <MovieList
                movies={nominated}
                handleClick={removeNominee}
                NomineeComp={RemoveSvg}
              /> 
          </Row>
        </Fragment>
		</Container>
  )
}

export default App
