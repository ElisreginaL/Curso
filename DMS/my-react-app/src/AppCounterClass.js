import { Component } from "react";

class AppCounterClass extends Component {
    constructor() {
        super();
        // Inicializando o estado com um contador começando em 0
        this.state = {
            counter: 0
        };
    }

    // Método chamado quando um botão é clicado para atualizar o contador
    updateCounter = (amount) => {
        this.setState({
            counter: this.state.counter + amount
        });
    };

    render() {
        return (
            <>
                {/* Exibindo o valor atual do contador */}
                <h1>{this.state.counter}</h1>

                {/* Botão para decrementar o contador em 1 */}
                <button onClick={() => this.updateCounter(-1)}>-1</button>

                {/* Botão para incrementar o contador em 1 */}
                <button onClick={() => this.updateCounter(1)}>+1</button>
            </>
        );
    }
}

export default AppCounterClass;
