// imports useState from react

import { useState } from 'react'
// We are adding the todos when the user inputs the data

// create AddTodo app that will be exported, takes new todo info from app.js function addTodo
const AddTodo = ({ onAdd }) => { 
    //array destructuring 
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        //prevents from submitting the form or cancels an event where the default action will not occur
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    // will return the following
    return (
        //form used to accept input from the user
         // a form that allows user to submit a new todo item
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
