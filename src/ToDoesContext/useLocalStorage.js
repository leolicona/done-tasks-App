import React from "react";

function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const updateItem = (a) =>{
      const stringifieldItem = JSON.stringify(a);
      localStorage.setItem(itemName, stringifieldItem)
      setItem(a)
    }
    return [
      item, 
      updateItem
    ];
  }

  export {useLocalStorage};