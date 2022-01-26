import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

const TodoForm = () => {

    const [title, setTitle] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        //if there are no todos just return 
        if(title !== "") {
            await addDoc(collection(db, 'todos'), {
                title,
                completed: false
            })
            setTitle("")
        }
    }

    return (
        <div className="pt-80 flex justify-center flex-col items-center">
        <p className="font-bold sm:text-6xl">What Is There Todo?</p>
        <form onSubmit={submitHandler} className="pt-3">
            <input placeholder="Enter Todo..." className="border border-solid border-blue-700 mx-2 py-2 " type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <button className="bg-blue-500 hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded" type="submit">Add Todo</button>
        </form>
        </div>
    )
}

export default TodoForm
