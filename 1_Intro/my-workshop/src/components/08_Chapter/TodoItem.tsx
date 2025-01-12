import React from "react";

interface TodoItemProps {
    id: number;
    title: string;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, onDelete }) => {
    const clickHandler:  React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
        if (typeof onDelete !== "function") {
            return;
        }
        onDelete(id)
    }

    return (
        <li>
            {title}
            <button onClick={clickHandler}>Usuń</button>
        </li>
    );
};

export default TodoItem;