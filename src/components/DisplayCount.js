import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import { Button } from '@mui/material';

const DisplayCount = () => {
    const { count } = useContext(CounterContext)
    return <Button variant="outlined" disabled>{ count }</Button>;
};

export default DisplayCount;
