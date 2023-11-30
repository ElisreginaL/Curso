import React from 'react';
import Task from './Task';

function App() {
    const tasks = [
        'Lavar o carro',
        'Ir no mercado',
        'Buscar o cachorro no petshop'
    ];

    return (
        <>
            <h1>TODO list</h1>
            {tasks.map((task, index) => (
                <Task key={index} text={task} />
            ))}
        </>
    );
}

export default App;