import { useState } from "react";

function Tasks() {
    const [message, setMessage] = useState("Hello Test")
    return (
        <div>
            <h1 className="">{message}</h1>
            <button onClick={() => {setMessage("Hi!")}}>Responder</button>
        </div>
    )
}

export default Tasks;