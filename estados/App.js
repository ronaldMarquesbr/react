import './App.css';
import Header from './Header'
import Counter from './Counter'

function App() {
  return (

    <div>
      <Header name="ProgBr" links={["Sobre", "Comprar", "Contato"]} ></Header>
      <Counter count={1} ></Counter>
    </div>
  );
}

export default App;
