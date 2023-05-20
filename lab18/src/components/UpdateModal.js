import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function UpdateModal(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target)
    const obj = {
      title: e.target.name.value,
      release_date: e.target.date.value,
      image_path: e.target.image_path.value,
      overview: e.target.overview.value,
    };

    const serverUrl = `${process.env.REACT_APP_SERVER_URL}updatemovie/${props.item.id}`;
    const axiosRes = await axios.put(serverUrl, obj);
    // console.log("updated card >> "+axiosRes);
    props.handelClose2();
    props.takeNewArrFromChild(axiosRes.data)
  };
  return (
    <>
      <Modal
        show={props.showFlag2}
        onHide={props.handelClose2}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>update information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group >
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                defaultValue={props.item.title}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>release date</Form.Label>
              <Form.Control
                name="date"
                type="text"
                defaultValue={props.item.release_date}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>image path</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  name="image_path"
                  type="text"
                  defaultValue={props.item.image_path}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group >
              <Form.Label>overview</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  name="overview"
                  type="text"
                  defaultValue={props.item.overview}
                />
              </InputGroup>
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handelClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UpdateModal;
