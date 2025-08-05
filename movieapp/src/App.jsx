import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
function App() {
  //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1

  let [searchTitle, setSearchTitle] = useState('')
  let [movieData, setMovieData] = useState([])
  //https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=mission

  let getMovies = () => {
    let apiUrl;
    if (searchTitle == '') {
      apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
      //All data WithOut Search
    }
    else {
      apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchTitle}`
      //All data With Search
    }

    axios.get(apiUrl)
      .then((res) => res.data)
      .then((finalRes) => {
        setMovieData(finalRes.results)
      })

  }

  useEffect(() => {
    getMovies()

  }, [searchTitle])

  return (
    <>
      <h1 className='text-center py-5 bg-light'>Movie App</h1>

      {/* <section className='container-fluid '>
        <div className='container'>
          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4'>
            <MovieItems />
            <MovieItems />
            <MovieItems />
            <MovieItems />
            <MovieItems />
          </div>
        </div>
      </section> */}
      {/* <hr className='my-5' /> */}
      <Container fluid>
        <Container>
          <Row xs={1}>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                value={searchTitle}
                onChange={(e)=>setSearchTitle(e.target.value)}
                type="text" placeholder="Search Movie By Title" 
                 
                 
                 />
              </Form.Group>
            </Col>
          </Row>
          <Row lg={4} md={2} xs={1} className='gy-4'>
            {
              movieData.length >= 1 &&
              movieData.map((items, index) => {
                return (
                  <MovieItems key={index} data={items}  />
                )
              })
            }


          </Row>
        </Container>
      </Container>

    </>
  )
}

export default App

// function MovieItems() {
//   return (
//     <div className='col'>
//       <div class="card">
//         <img src="https://image.tmdb.org/t/p/w1280/yvirUYrva23IudARHn3mMGVxWqM.jpg" class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>

//         </div>
//       </div>
//     </div>
//   )
// }

function MovieItems({data}) {
  return (
    <Col>
      <Card >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} />
        <Card.Body>
          <Card.Title>
            {data.original_title}
          </Card.Title>
          <Card.Text>
          Rating  {data.vote_average}
          </Card.Text>
         
        </Card.Body>
      </Card>
    </Col>
  )
}
