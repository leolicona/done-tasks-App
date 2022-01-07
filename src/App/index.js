import React from 'react';
import { ToDoesProvider } from '../ToDoesContext';
import { AppUI } from './AppUI';

function App() {
  
  return (
    <ToDoesProvider>
      <AppUI/>
    </ToDoesProvider>
    

  );
}

export default App;