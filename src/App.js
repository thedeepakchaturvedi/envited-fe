import './App.css';
import LandingPage from './components/LandingPage';
import CreateEvent from './components/CreateEvent';
import Event from './components/Event';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [store, setStore] = useState({
    eventName:"",
    hostName: "",
    startTime: "",
    endTime: "",
    location: "",
    img: "",
  });

  const updateStore = (property, newValue) => {
    const newStore = {...store};
    newStore[property] = newValue;
    setStore(newStore);
  }
  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/create' element={<CreateEvent store={store} updateStore={updateStore}/>} />
            <Route path='/event' element={<Event store={store}/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
