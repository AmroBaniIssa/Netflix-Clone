import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import MovieModal from "./MovieModal";
function MoviesList() {
  const [moviesData, setMovieData] = useState([]);
  const [clickedOneMovie, setclickedOneMovie] = useState({});
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}trending`;
    const result = await axios.get(serverUrl);
    setMovieData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

  const handelShow = (item) => {
    setShow(true);
    setclickedOneMovie(item);
  };
  const addToFav = async (item) => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}`;
    const obj1 = {
      title: item.title,
      release_date: item.release_date,
      image_path: item.image_path,
      overview: item.overview,
    };
    const result = await axios.post(`${serverUrl}addemovie`, obj1);
    if(result){
      setShow2(true);
    }
  };
  const handelClose = () => {
    setShow(false);
    setShow2(false);
  };
  return (
    <>
      <h1>Home</h1>
      {/* <button onClick={sendReq}> send req</button> */}
      <Modal show={show2} onHide={handelClose}>
        <Modal.Header closeButton>
          <Modal.Title>add to faverate </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, added sucssesfully </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handelClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      <Row xs={1} md={3} className="g-4">
        {moviesData.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w400" + item.image_path}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.overview.slice(0, 50) + "..."}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handelShow(item);
                  }}
                >
                  {" "}
                  more information
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => {
                    addToFav(item);
                  }}
                >
                  add to faverate 💚
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MovieModal
        showFlag={show}
        handelClose={handelClose}
        movieData={clickedOneMovie}
      />
    </>
  );
}
export default MoviesList;
