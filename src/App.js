import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('GreatStack');

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000)
  }, [count, name])

  return (
    <div className="App">
      <h1>I have rendered {count} times!</h1>
    </div>
  );
}

export default App;
