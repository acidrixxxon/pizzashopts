import React,{ Dispatch, RefObject, SetStateAction } from 'react'


const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>,handler: () => void) => {
    const listener = (event: Event) => {
        if (ref.current !== null) {
            if (ref.current.contains(event?.target as Node)) {
                console.log('da')
                return;
              }
      
              handler();
        }
    }

    React.useEffect(() => {
        document.addEventListener('click',listener)


        return () => {
            document.removeEventListener('click',listener)
        }
    },[])
}


export default useOutsideClick

