import React from "react";
import { ToDoesContext } from "../ToDoesContext";
import './Addtask.css'

function Addtask() {
    const [newTaskValue, setNewTaskValue] = React.useState('');
    const {
        addNewTask,
        setOpenModal
    } = React.useContext(ToDoesContext);
    const onChange = (event) => {
        console.log(event.target.value);
        setNewTaskValue(event.target.value)
    }

    const onCancel = () => {
            setOpenModal(false)
        }
    
    const onSubmit = (event) => {
       event.preventDefault();
       console.log('on Submit Task', newTaskValue)
       addNewTask(newTaskValue);
    }

    return(
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
            value={newTaskValue}
            onChange={onChange}
            placeholder="¿Que quires agregar a tu día?"
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button className="TTodoForm-button TodoForm-button--add"
                type="submit"
                >Agregar</button>
            </div>
        </form>
    );
}

export {Addtask};