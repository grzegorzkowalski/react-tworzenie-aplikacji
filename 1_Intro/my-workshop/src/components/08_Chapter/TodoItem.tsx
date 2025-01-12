import React from "react";

interface TodoItemProps {
    id: number;
    title: string;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, onDelete }) => {
    return (
        <li>
            {title}
            <button onClick={() => onDelete(id)}>Usuń</button>
        </li>
    );
};

export default TodoItem;