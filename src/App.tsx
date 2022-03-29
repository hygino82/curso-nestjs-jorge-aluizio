import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const [counter, setCounter] = useState(1);



  function handleButtonClick() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <>
      <Header title='Página inicial' />
      <Header title='Página do desenvolvedor' />
      <h1>Olá Dev!</h1>

      <p>{counter}</p>
      <button onClick={ handleButtonClick }>Incrementar</button>
      <Menu>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </Menu>
    </>
  );
}

export default App;
