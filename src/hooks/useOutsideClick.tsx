import React,{ Dispatch, RefObject, SetStateAction } from 'react'


const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>,handler: (event: Event) => void) => {
    const [ qty,setQty ] = React.useState<number>(0)

    const listener = (event: Event) => {
        if (!ref?.current || ref?.current.contains((event?.target as Node) || null)) {
            console.log('da')
            return;
          }
  
          handler(event);
    }

    React.useEffect(() => {
        document.addEventListener('click',listener)
    },[])

    return (
        [qty]
    )
}


export default useOutsideClick

