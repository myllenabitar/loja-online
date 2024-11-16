import React from "react";

const Produto = ({ produto }) => {
    const [dados, setDados] = React.useState();

    React.useEffect(() => {
        if (produto)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(response => response.json())
        .then(json => setDados(json));
    }, [produto]);

    if(!dados) return null;

    const primeiraFoto = dados.fotos && dados.fotos[0];
    const disponivel = dados.vendido === false;

    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>R$: {dados.preco}</p>
            <p style={{backgroundColor:"gray", maxWidth:"150px"}}>{disponivel? <p>Produto vendido!</p> : <p>Ainda disponível!</p>}</p>
            {primeiraFoto && (
        <img src={primeiraFoto.src} alt={primeiraFoto.titulo} style={{ maxWidth: "200px", margin: "10px" }}/>)}
    </div>
    )
    }
    
    export default Produto;