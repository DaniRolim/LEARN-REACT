import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
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
                    {props.tasks.map((task) => (
                        <li key={task.id} className="flex gap-2">
                            <button 
                                className={`bg-slate-400 text-white text-left p-2 w-full rounded-md ${task.isCompleted && 'line-through'}`}
                                onClick={() => props.onTaskClick(task.id)}
                            >
                                {task.title}
                            </button>
                            <button 
                                onClick={() => onSeeDetailsClick(task)}
                                className="bg-slate-400 text-white p-2 rounded-md">
                                <ChevronRightIcon />
                            </button>
                            <button 
                                className="bg-slate-400 text-white p-2 rounded-md" 
                                onClick={() => props.onDeleteTaskClick(task.id)}>
                                <Trash />
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default Tasks;