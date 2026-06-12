import { useState } from "react";
import Tasks from "./components/Tasks"

function App() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div>
      <h1 className="text-blue-500 text-3xl">GERENCIADOR DE TAREFAS</h1>
      <Tasks/>
    </div>
  );
}               

export default App;