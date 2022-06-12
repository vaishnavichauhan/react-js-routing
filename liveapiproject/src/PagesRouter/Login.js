import React,{ useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginData } from '../action/LoginAction';

export default function Login() {

    const [myData, setmyData] = useState({
        email : '',
        password : ''
    })

  
    const mynavigate =  useNavigate()


  const onHandelChange = (e)=> {

    const {name, value} = e.target;

    setmyData({...myData,[name]: value})
  }

  const myLoginuser = useSelector((state) => state.loginData);

  const mytoke =useSelector((state) => myLoginuser.userData?.data?.jwtToken);

  const mydispatch = useDispatch();

useEffect(()=>{

if(mytoke != undefined){
  mynavigate('/');
}

},[mytoke,mynavigate])


  const onHandelSubmit = (e)=>
  {
    e.preventDefault();
    mydispatch(loginData(myData))

  } 


  return (
    <div>
    <Form className='container' onSubmit={onHandelSubmit}>
        <h1>My Login:</h1>

        <Form.Group className="mb-3">
          <Form.Label>email:</Form.Label>
          <Form.Control type="text" value={myData.email} placeholder="email" name="email" onChange={onHandelChange} />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" value={myData.password} placeholder="password" name="password" onChange={onHandelChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>

    </div>
  )
}
