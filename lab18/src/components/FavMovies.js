
import { useEffect, useState } from "react";
import axios from "axios";
import FavList from "./FavList";
function FavMovies() {
    const [favMovie, setFavMovie] = useState([]);
    const sendReq = async () => {
        // console.log('data');
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}getmovies`;
        const result = await axios.get(serverUrl);
        // console.log(result.data);
        setFavMovie(result.data);

    }
    const takeNewArr = (newarr) => {
      setFavMovie(newarr)
    }
    useEffect(() => {
        sendReq();
    }, []);
    return (
        <>
            <FavList favData={favMovie} takeNewArr={takeNewArr} />
        </>
    )
}

export default FavMovies;