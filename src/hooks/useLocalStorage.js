import * as React, {useState} from 'react';

 const useLocalStorage =(key, initalValue) =>{
    const [storedValue, setstoredValue] = useState (()=> {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initalValue
    })
    const setValue = value =>{
        setstoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
        
        return [storedValue, setValue]
    }

}

export default useLocalStorage;