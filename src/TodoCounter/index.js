import React from 'react';
import { ToDoesContext } from '../ToDoesContext';
import './TodoCounter.css';

function TodoCounter() {
    const {
        totalToDoes,
        completedToDoes,

    } = React.useContext(ToDoesContext);
    return (
        <h2 className='TodoCounter'> Has completado {completedToDoes} de {totalToDoes} To Do</h2>
    );
}
// Exportar funcion 
 export { TodoCounter }; 
