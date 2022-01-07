import React from "react";
import { ToDoesContext } from "../ToDoesContext";

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
            <div>
                <button 
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button 
                type="submit"
                >Agregar</button>
            </div>
        </form>
    );
}

export {Addtask};