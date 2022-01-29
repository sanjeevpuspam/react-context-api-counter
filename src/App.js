import CounterEvent from './components/CounterEvent';
import DisplayCount from './components/DisplayCount';
import CounterContextProvider from './context/CounterContext';

const App = () => {
  return (
    <div className="App">
      <CounterContextProvider>
        <CounterEvent />
        <DisplayCount />
      </CounterContextProvider>     
    </div>
  );
}

export default App;
