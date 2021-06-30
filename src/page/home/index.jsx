
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { addbook, removebook } from '../../action/index';


const Home = () => {
    
    const data = useSelector(state => state.favorites);
    
    const dispatch = useDispatch();
    
    const [selected, setSelected] = useState("")
    
    const [selectedBook, setSelectedBook] = useState({
        title: "",
        price: 0
    })
    
    const books = [
        {
            id: "1",
            title: "the king",
            price: 200,
        },
        {
            id: "2",
            title: "the legende",
            price: 2000,
        },
        {
            id: "3",
            title: "the vmaker",
            price: 100,
        }
    ];



    return (
        <div>
            {
                books.map(book =>
                (
                    <div key={book.id}>
                        <b> title : {book.title}</b>
                        <p> price : {book.price}</p>
                        {selected === book.id ?
                            <div>
                                <input type="text" name="title" placeholder="title" onChange={(e) => setSelectedBook({
                                    ...selectedBook,
                                    title: e.target.value
                                })} />
                                <input type="text" name="price" placeholder="price" onChange={(e) => setSelectedBook({
                                    ...selectedBook,
                                    price: e.target.value
                                })} />
                                <button onClick={() => {
                                    dispatch({
                                        type: "EDIT",
                                        payload: { ...selectedBook, id: book.id }
                                    })
                                }}>
                                    Edit
                                </button>
                            </div>
                             :
                            <div>
                                <button onClick={() => dispatch(addbook(book))}>add</button>
                                <button onClick={() => dispatch(removebook(book))} >remove</button>
                                <button onClick={() => setSelected(book.id)}>edit</button>
                            </div>

                        }

                    </div>
                )
                )
            }
        </div>
    );
}

export default Home;