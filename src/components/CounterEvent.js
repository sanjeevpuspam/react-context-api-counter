import { useContext } from 'react';
import { CounterContext } from './../context/CounterContext';
import { Button } from '@mui/material';


const CounterEvent = () => {
  const {count, incrementCount, decrementCount, resetCount } = useContext(CounterContext);
  return <>
    <Button onClick={ incrementCount } variant="contained">Increment</Button>
    <Button onClick={ resetCount } variant="contained">Reset</Button>
    <Button onClick={ decrementCount } variant="contained">Decrement</Button>
  </>;
}

export default CounterEvent;
