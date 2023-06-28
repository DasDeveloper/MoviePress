import { useEffect, useState } from "react";

import React from 'react'

const useDebounce = (value, delay= 500) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const id = setTimeout(()=>{
            console.log('setting new timeout')
            setDebouncedValue(value)
        }, delay)
        return () =>{
            console.log('clearing the timeout')
            clearTimeout(id)
        }
    }, [value, delay])
    
  return debouncedValue;
}

export default useDebounce