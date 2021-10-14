import React, { useState } from 'react';

export default function Contador() {
    const [numero, setNumero] = useState(0);
    return (
        <div>
            <p>Numero:{numero}</p>
            <button onClick={() => setNumero(numero + 5)}>+5</button>
            <button onClick={() => setNumero(numero - 3)}>-3</button>
        </div>
    );
}
