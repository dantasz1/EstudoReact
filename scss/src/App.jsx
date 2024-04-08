// Exemplo JSX

import "./App.scss";

function App() {
  const nome = "André";

  return (
    <div className="cartao">
      <h1>{nome}</h1>
      <div className="botao">
        <button>Lindo</button>
      </div>
    </div>
  );
}

export default App;
