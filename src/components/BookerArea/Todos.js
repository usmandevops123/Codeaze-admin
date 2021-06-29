import React, { useState } from 'react'
import { db } from '../Firebase'
export default function Todos({ user }) {
    const [text, setText] = useState("")
    const addTodo = () => {
        console.log("called")
        db.collection("todos").doc(user.uid).set({
            todos: text
        })

    }
    return (
        <>
            <h1> Add Bookers </h1>
            <div class="input-field ">
                <input type="text" placeholder="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={
                    () => addTodo()
                } className="btn blue">
                    Add
                </button>
            </div>

        </>
    )

}
