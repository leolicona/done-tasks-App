import React from 'react';
import { ToDoesContext } from '../ToDoesContext';
import './TodoSearch.css'

 function TodoSearch() {
     const {
        searchValue,
        setSearchValue,
     } = React.useContext(ToDoesContext);

     const onSearchValueChange = (event) => {
         console.log(event.target.value);
         setSearchValue(event.target.value);
     }
     return[
         <input className='TodoSearch' placeholder='Cebolla' 
         value={searchValue}
         onChange={onSearchValueChange}/>,
         <p>{searchValue}</p>
     ];
     
 }

 export {TodoSearch};