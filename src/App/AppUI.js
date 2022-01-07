import React from "react";
import { ToDoesContext } from "../ToDoesContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import {Addtask} from '../AddTask';

function AppUI() {
    const {
        searchedToDoes,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal
    } = React.useContext(ToDoesContext);
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {searchedToDoes.map(toDo => (
                    <TodoItem 
                        key={toDo.text} 
                        text={toDo.text} 
                        completed={toDo.completed}
                        onComplete = {() => completeTask(toDo.text)}
                        onDelete = {() => deleteTask(toDo.text)}/>
                        ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <Addtask/>
                </Modal>
            )}
        
            <CreateTodoButton setOpenModal={setOpenModal}/>
        </React.Fragment>
    );
    
}
export {AppUI};