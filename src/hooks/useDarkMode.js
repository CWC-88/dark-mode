
import * as React, {useEffect} from 'react';

import useLocalStorage from './useLocalStorage'

 const useDarkMode = (key) => {
    const [darkened,setDarkended] = useLocalStorage(key);
    useEffect(() =>{
        const body = document.querySelector('body');
        if(darkened){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

    },[darkened]
        )
return [darkened,setDarkended]
}



export default useDarkMode;