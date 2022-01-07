import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {
const onClickButton = () =>  {
 
        console.log('Click');
        props.setOpenModal(a => !a)
    }
    return (
    <button className='CreateTodoButton' onClick={onClickButton}>+</button>
   );  
}

export { CreateTodoButton }