import React from "react";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if( produtoLocal !== null ) setProduto(produtoLocal);
  }, [])

  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({target}) {
    setProduto(target.innerText);
  }

return (
<div>
  <h1>Preferência: {produto}</h1>
  <button onClick={handleClick} style={{marginRight:'1rem'}}>Notebook</button>
  <button onClick={handleClick} style={{marginRight:'1rem'}}>Smartphone</button>
  <button onClick={handleClick} style={{marginRight:'1rem'}}>Smartwatch</button>
  <button onClick={handleClick} style={{marginRight:'1rem'}}>Tablet</button>
  <button onClick={handleClick} style={{marginRight:'1rem'}}>Smartspeaker</button>
  <Produto produto={produto} />
</div>
)
}

export default App;
