import { useState, createContext } from 'react';

export const CounterContext = createContext();

const CounterContextProvider = (props) => {
    const [count,setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    };
    const decrementCount = () => {
        setCount(count-1);
    };
    const resetCount = () =>{
        setCount(0);
    }
    const objData = { count, incrementCount, decrementCount, resetCount };

  return(<CounterContext.Provider value={ objData }>
            { props.children }
        </CounterContext.Provider>);
}

export default CounterContextProvider;
