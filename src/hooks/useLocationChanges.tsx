import React from 'react'
import { useLocation } from 'react-router-dom';



export function useLocationChanges(callback: () => void) {
    const { pathname } = useLocation()

    React.useEffect(() => {
        callback()
  
    }, [pathname]); 
  
    return useLocationChanges;
  }