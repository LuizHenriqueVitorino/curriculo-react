import { useState } from "react";


function Home() {
    return (
        <div>
            <Contador/>
        </div>
    );
}

function Contador(){
    const [contador, setContador] = useState(0);

    function adicionaContador(){
        setContador(contador + 1);
    }

    function zeraContador(){
        setContador(0);
    }

    function decrementarContador(){
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="conteiner">
            <h1>{contador}</h1>
            <div className="botoes">
                <button className="btn" id="add" onClick={adicionaContador}>Acrescentar</button>
                <button className="btn" id="dec" onClick={decrementarContador}>Decrementar</button>
                <button className="btn" id="zer" onClick={zeraContador}>Zerar</button>
            </div>
        </div>
    );
}

export default Home