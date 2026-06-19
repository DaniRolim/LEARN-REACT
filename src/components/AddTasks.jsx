import { useState } from "react";

function AddTasks({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(onAddTaskSubmit);
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col">
            <input 
                className="border-2 border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite o título da tarefa" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
            <input 
                className="border-2 border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            <button 
                className="bg-slate-500 text-white cursor-pointer px-4 py-2 rounded-md font-medium" 
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Preencha o título e a descrição da tarefa.")
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}
            >Adicionar</button>
        </div>
    )
}

export default AddTasks;