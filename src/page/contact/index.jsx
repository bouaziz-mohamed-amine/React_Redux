import React, { Component } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {removebook} from '../../action/index'

const FAvorites = () => {
    
    const favorites = useSelector(state =>state.favorites);
    const dispatch = useDispatch();
    return (
       <div>{
            favorites.map(book =>(
            <div>
               <b>{book.title}</b>
               <p>{book.price}</p>
               <button onClick={()=>dispatch(removebook(book))}>remove</button>
            </div>
            )
            )    
          }
      </div>
    )
}
 
export default FAvorites;