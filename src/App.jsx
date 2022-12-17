import React from "react";
import TaskList from "./assets/components/TaskList";
import TaskForm from "./assets/components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
