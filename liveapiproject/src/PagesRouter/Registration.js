import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { postRegistrati } from '../action/registrationAction';
import { useDispatch, useSelector } from 'react-redux'

export default function Registration() {

  const [myData, setmyData] = useState({

    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true


  })

  const onHandelChange = (e) => {
    const { name, value, checked } = e.target;

    if (name == "acceptTerms") {
      setmyData({ ...myData, acceptTerms: checked });
    }
    else {
      setmyData({ ...myData, [name]: value });
    }

  }

  const myReigstation = useSelector((state) => state.registration);

  console.log(myReigstation);



  const myDispatch = useDispatch();

  

  const onHandelSubmit = (e) => {

    e.preventDefault();
    console.log(myData);

    myDispatch(postRegistrati(myData));

  }
  return (
    <div>
      <Form className='container' onSubmit={onHandelSubmit}>
        <h1>My Registration:</h1>

        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={myData.title} placeholder="title" name="title" onChange={onHandelChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>FirstName:</Form.Label>
          <Form.Control type="text" value={myData.firstName} placeholder="firstName" name="firstName" onChange={onHandelChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>LastName:</Form.Label>
          <Form.Control type="text" value={myData.lastName} placeholder="lastName" name="lastName" onChange={onHandelChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" value={myData.email} placeholder="email" name="email" onChange={onHandelChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" value={myData.password} placeholder="password" name="password" onChange={onHandelChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>confirmPassword:</Form.Label>
          <Form.Control type="confirmPassword" value={myData.confirmPassword} placeholder="confirmPassword" name="confirmPassword" onChange={onHandelChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" checked={myData.acceptTerms} value={myData.acceptTerms} name="acceptTerms" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </div>
  )
}
