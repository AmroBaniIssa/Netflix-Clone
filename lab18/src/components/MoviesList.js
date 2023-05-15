import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import MovieModal from "./MovieModal";
function MoviesList() {
  const [moviesData, setMovieData] = useState([]);
  const [clickedOneMovie,setclickedOneMovie]=useState({});
  const [show,setShow]=useState(false);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}trending`;
    const result = await axios.get(serverUrl);
    setMovieData(result.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

  const handelShow=(item)=>{
    setShow(true);
    setclickedOneMovie(item);
  }
  const handelClose=()=>{
    setShow(false);
  }
  return (
    <>
      <h1>Home</h1>
      {/* <button onClick={sendReq}> send req</button> */}
      <Row xs={1} md={3} className="g-4">
        {moviesData.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w400"+item.image_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.overview.slice(0, 50) + "..."}</Card.Text>
                <Button variant="primary" onClick={()=>{handelShow(item)}} > more information</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MovieModal showFlag={show} handelClose={handelClose}  movieData={clickedOneMovie}/>
    </>
  );
}
export default MoviesList;
