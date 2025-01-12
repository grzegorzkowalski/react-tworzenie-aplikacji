import React from "react";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
    tasks: { id: number; title: string }[];
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TodoItem key={task.id} id={task.id} title={task.title} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default TodoList;