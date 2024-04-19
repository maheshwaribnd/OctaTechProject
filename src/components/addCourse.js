import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function addCourse() {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Label htmlFor="inputPassword5">Course Name</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <Form.Label htmlFor="inputPassword5">Description</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <Form.Label htmlFor="inputPassword5">Instructor</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <Form.Select aria-label="Default select example">
            <option>Instrument</option>
            <option value="1">Guitar</option>
            <option value="2">Flute</option>
            <option value="3">Piono</option>
          </Form.Select>

          <Form.Select aria-label="Default select example">
            <option>Day of the week</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Label htmlFor="inputPassword5">Price</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

        </Modal.Body>
        <Modal.Footer>
          <Button>Cancel</Button>
          <Button>Add Course</Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default addCourse