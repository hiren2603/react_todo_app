import React from 'react'

function TodoList(props) {
    
    return (
        <>
            <div className="todo_style">
                <i className="fas fa-times" area-hidden="true"
                onClick={()=>{
                    props.onSelect(props.id)
                    }}>
                </i>
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default TodoList;
