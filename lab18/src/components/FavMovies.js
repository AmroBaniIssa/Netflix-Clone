import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

function FavMovies() {
  const [moviesData, setMovieData] = useState([]);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getmovies`;
    const result = await axios.get(serverUrl);
    setMovieData(result.data);
  };
  
  useEffect(()=>{
    sendReq();
  },[])

  return (
    <>
      <h1>FAVERATE LIST</h1>
      {/* <button onClick={sendReq}> send req</button> */}
      <Row xs={1} md={3} className="g-4">
        {moviesData.map((item,idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w300"+item.image_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                 <h3>{"Relesed at "+item.release_date}</h3> 
                 {item.overview}
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default FavMovies;
