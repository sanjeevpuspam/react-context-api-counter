import CounterEvent from './components/CounterEvent';
import DisplayCount from './components/DisplayCount';
import CounterContextProvider from './context/CounterContext';
import './App.css';

const App = () => {
  return (
    <div className="App">
      
      <CounterContextProvider>
        <DisplayCount />
        <br />
        <CounterEvent />        
      </CounterContextProvider>     
    </div>
  );
}

export default App;
