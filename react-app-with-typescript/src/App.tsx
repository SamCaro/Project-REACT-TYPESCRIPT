import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { sub } from './types';

interface AppState {
subs: Array<sub>
newSubsNumber: number
}

const INITIAL_STATE = [
    {
      nick: 'Juli',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=',
      description: 'To jump on the bed'
    },
    {
      nick: 'Mari',
      subMonths: 10,
      avatar: 'https://i.pravatar.cc/150?u=',
      description: 'Makeup forever'
    },
        {
      nick: 'Majo',
      subMonths: 14,
      avatar: 'https://i.pravatar.cc/150?u',
      description: 'Do everything and nothing online with friends'
    }
]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
 
  const handleNewSub = (newSub: sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }


  return (
    <div className="App" ref={divRef}>
      <h1>My chanel Subs </h1>
      <List subs={subs}></List>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
