import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }
    return (
        <div>
                <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex gap-2">
                            <button 
                                className={`bg-slate-400 text-white text-left p-2 w-full rounded-md ${task.isCompleted && 'line-through'}`}
                                onClick={() => onTaskClick(task.id)}
                            >
                                {task.title}
                            </button>
                            <Button 
                                onClick={() => onSeeDetailsClick(task)}>
                                <ChevronRightIcon />
                            </Button>
                            <Button  
                                onClick={() => onDeleteTaskClick(task.id)}>
                                <Trash />
                            </Button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default Tasks;