import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesAPI } from "../configureStore";

const Greeting = () =>  {

  const fetchedMessages = useSelector((state) => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessagesAPI())
  }, [])
  
  
    return (
      <React.Fragment>
        <span>Greeting:</span>
        <h3>{ fetchedMessages.greeting }</h3>
        <button
        className="getMessages"
        onClick={ () => { dispatch(getMessagesAPI()) }}
        >click</button>
      </React.Fragment>
    );
  
}

export default Greeting

