import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image';

function MovieModal(props) {
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handelClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src={"https://image.tmdb.org/t/p/w300"+props.movieData.image_path} rounded />
         <hr></hr>
            <p>{props.movieData.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handelClose}>
            Close
          </Button>
          <Button variant="primary" >
            add to faverate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MovieModal;
