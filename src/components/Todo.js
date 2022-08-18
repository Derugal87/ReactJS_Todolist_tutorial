import React from "react";
import {FaCheck, FaTrashRestore} from "react-icons/fa"

const Todo = ({text, todo, todos, setTodos}) => {
    //events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id ));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id ) {
                return {
                    ...item, 
                    completed: !item.completed
                } 
            }
            return item;
        }));
    };
    return (
        <div className="todo">
            <li className={`todo_item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <FaCheck />
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <FaTrashRestore/>
            </button>
        </div>
    );
};

export default Todo;