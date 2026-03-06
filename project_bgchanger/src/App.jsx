import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col justify-end items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-10 bg-white p-4 rounded-xl shadow-lg mb-6">
        <Button color="green" onClick={() => setcolor("green")} />
        <Button color="red" onClick={() => setcolor("red")} />
        <Button color="black" onClick={() => setcolor("black")} />
        <Button color="blue" onClick={() => setcolor("blue")} />
        <Button color="yellow" onClick={() => setcolor("yellow")} />
      </div>
    </div>
  );
}

export default App;