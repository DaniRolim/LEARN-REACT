import { useState } from "react";
import Tasks from "./components/Tasks"

function App() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div>
      <Tasks/>
    </div>
  );
}               

export default App;