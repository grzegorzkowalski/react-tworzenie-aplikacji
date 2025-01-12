import React, {useState} from "react";
import TodoList from "./TodoList.tsx";

const TodoApp: React.FC = () => {
    const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]);
    const [taskCounter, setTaskCounter] = useState<number>(1);

    const addTask = () => {
        const newTask = { id: taskCounter, title: `Task ${taskCounter}` };
        setTasks([...tasks, newTask]);
        setTaskCounter(taskCounter + 1);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>TODO App</h1>
            <button onClick={addTask}>Dodaj nowy task</button>
            <TodoList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
};

export default TodoApp;