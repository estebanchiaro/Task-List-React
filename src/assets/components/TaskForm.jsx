import { useState,useContext} from "react";
import React from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask}= useContext(TaskContext)

 

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    settitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
    <form action="" onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        type="text"
        placeholder="Escribe tu Tarea"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value);
          
        }}
        className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-green-600">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
