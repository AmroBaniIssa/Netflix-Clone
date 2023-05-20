import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import UpdateModal from "./UpdateModal";
function FavList(props){
    // const [moviesData, setMovieData] = useState([]);
    const [clickedOneMovie,setclickedOneMovie]=useState({});
    const [showUpdate, setShowUpdate]=useState(false);
    // const [show,setShow]=useState(false);
    // const [newArr,setNewArray]= useState([]);
    // const sendReq = async () => {
    //   const serverUrl = `${process.env.REACT_APP_SERVER_URL}getmovies`;
    //   const result = await axios.get(serverUrl);
    //   // console.log(result.data);
    //   setMovieData(result.data);
    // };
    
    // useEffect(()=>{
    //   sendReq();
    // },[])

    // const handelShow=(item)=>{
    //   setShow(true);
    //   setclickedOneMovie(item);
    // }
    const handelUpdate=(item)=>{
      setShowUpdate(true);
      setclickedOneMovie(item);
  
    }
    const handelClose=()=>{
    //   setShow(false);
      setShowUpdate(false);
    }
    const  takeNewArrFromChild=(arr)=>{
        props.takeNewArr(arr);
    }
    const handelDelete=async(item)=>{
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}`;
      const result=await axios.delete(`${serverUrl}deletemovie/${item.id}`);
      takeNewArrFromChild(result.data)
      
    }
    return (
        <>
          <h1>FAVERATE LIST</h1>
          {/* <button onClick={sendReq}> send req</button> */}
          <Row xs={1} md={3} className="g-4">
            {props.favData.map((item,idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w300"+item.image_path} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                     <h3>{"Relesed at "+item.release_date}</h3> 
                     {item.overview}
                    </Card.Text>
                    <Button variant="success" onClick={()=>{handelUpdate(item)}} >Update</Button>
                    <Button variant="danger" onClick={()=>{handelDelete(item)}} >Delete</Button>
               
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <UpdateModal showFlag2={showUpdate} handelClose2={handelClose} item={clickedOneMovie} takeNewArrFromChild={takeNewArrFromChild}/>
    
        </>
      );

}
export default FavList;