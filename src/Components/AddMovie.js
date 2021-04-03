import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddMovie = ({addMovie}) => {
  const [show, setShow]=useState(false)
  const handleShow = () => setShow(!show);
  const handleChange = (event) =>
      setMovie({...newMovie,[event.target.name]: event.target.value})
  ;
  const [newMovie, setMovie]=useState({
    id:uuidv4(),
    title:"",
    description:"",
    posterUrl:"",
    rate:1
  })
  const handleSave = () => {
    addMovie(newMovie);
    setMovie({
      id:uuidv4(),
      title:"",
      description:"",
      posterUrl:"",
      rate:1
    })
  }
    return (
      <div>
        <Button variant="primary" onClick={handleShow} style={{marginBottom: 20}}>
          +
        </Button>
        <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label className="input" style={{marginRight: 10}}>Title : </label>
                <input type="text" name="title" onChange={handleChange}/>
              </div>
              <div>
                <label className="input" style={{marginRight: 10}}>Descript. :</label>
                <input type="text" name="description" onChange={handleChange}/>
              </div>
              <div>
                <label className="input" style={{marginRight: 10}}>PosterURL :</label>
                <input type="text" name="posterUrl" onChange={handleChange}/>
              </div>
              <div>
                <label className="input" style={{marginRight: 10}}>Rate : </label>
                <input type="text" name="rate" onChange={(e)=>setMovie({...newMovie,rate:parseInt(e.target.value)})}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

export default AddMovie;