import React, { useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setInputList(event.target.value)
    }

    const addItem = () => {
        setItems((olditems) => {
            return [...olditems, inputList];
        });
        setInputList("");
    }

    const removeItem = (id)=>{
        console.log('Deleted');

        setItems((olditems)=>{
            return olditems.filter((arrElem, index)=>{
                return index !== id; 
            })
        })
    };
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Todo App</h1>
                </div>
                <div className="input_text">
                    <input type="text" placeholder="Enter your Todo here..." onChange={inputEvent} name="text" />
                    <button onClick={addItem}>
                        <i className="fas fa-plus-circle" area-hidden="true"></i>
                    </button>
                </div>
                <h2 className="list_heading">My Todos</h2>
                <div className="list">
                    <ol>
                        {items.map((item, index) => {
                            return <TodoList 
                                key={index} 
                                id={index} 
                                text= {item} 
                                onSelect={removeItem}   
                                />
                        })}
                    </ol>
                </div>
            </div>

        </>
    )
}

export default Todo
