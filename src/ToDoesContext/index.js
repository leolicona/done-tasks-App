import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoesContext = React.createContext();

function ToDoesProvider(props) {

    const [toDoes, updateToDoes] = useLocalStorage('TASKS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
 

    const completedToDoes = toDoes.filter(completedToDo => !!completedToDo.completed).length;
    const totalToDoes = toDoes.length;

    let searchedToDoes  = [];
    if (!searchValue.length >= 1){
        searchedToDoes = toDoes;
    } else {
        searchedToDoes = toDoes.filter(toDo => {
            const toDoText = toDo.text.toLowerCase();
            const searchedText = searchValue.toLowerCase();
            return toDoText.includes(searchedText);
        } ); 
    }

    const completeTask = (task) => {
        const taskIndex = toDoes.findIndex(toDo => toDo.text === task);
        const newToDoes = [...toDoes]
        newToDoes[taskIndex].completed = true;
        updateToDoes(newToDoes);
    }

    const addNewTask = (task) => {
        console.log('On add task', task);
        const newToDoes = [...toDoes]
        console.log(toDoes);
        newToDoes.push({
            completed: false,
            text: task,
        })
        updateToDoes(newToDoes);
        setOpenModal(false)
    }

    const deleteTask = (task) => {
        const taskIndex = toDoes.findIndex(toDo => toDo.text === task);
        const newToDoes = [...toDoes]
        newToDoes.splice(taskIndex, 1)
        updateToDoes(newToDoes);
    }

    return ( 
        <ToDoesContext.Provider value={{
            totalToDoes,
            completedToDoes,
            searchValue,
            setSearchValue,
            searchedToDoes,
            completeTask,
            addNewTask,
            deleteTask,
            openModal,
            setOpenModal
            

        }}>
            {props.children}
        </ToDoesContext.Provider>
    );
    
}

export { ToDoesContext, ToDoesProvider};