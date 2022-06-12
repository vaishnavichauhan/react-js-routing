import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeAction } from '../action/HomeAction';


export default function Home() {

  const myproduct = useSelector((state)=>state.homedata)
  console.log(myproduct);

  const mydispatch = useDispatch();

  useEffect(()=>{
    mydispatch(HomeAction())
  },[])


  return (
    
    <div>
        {
            myproduct.product.map((element,index)=> {
                return(<div><tr><td>{index} </td> 
                                <td>{element.title}</td>
                                <td> {element.firstName}</td>
                                <td> {element.lastName} </td>
                                </tr></div>)
            })


        }

    </div>
  ) 
}