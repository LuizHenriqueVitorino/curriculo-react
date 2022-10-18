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
        <div>
            <h1>{contador}</h1>
            <button onClick={adicionaContador}>Acrescentar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={zeraContador}>Zerar</button>
        </div>
    );
}

export default Home