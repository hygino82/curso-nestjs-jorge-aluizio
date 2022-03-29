import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Header title='Página inicial'/>
      <Header title='Página do desenvolvedor'/>
      <h1>Olá Dev!</h1>

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
