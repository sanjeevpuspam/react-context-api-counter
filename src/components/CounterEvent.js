import { useContext } from 'react';
import { CounterContext } from './../context/CounterContext';
import { Button } from '@mui/material';


const CounterEvent = () => {
  const {count, incrementCount, decrementCount } = useContext(CounterContext);
  return <>
    <Button onClick={ incrementCount } variant="contained">+</Button>
    <Button variant="outlined" disabled>{ count }</Button>
    <Button onClick={ decrementCount } variant="contained">-</Button>
  </>;
}

export default CounterEvent;
