import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    // Inicializando o estado do componente
    this.state = {
      time: new Date().toString(), // Inicializando o tempo com a data atual
      show: true, // Inicializando o estado de exibição como verdadeiro
      color: 'red', // Inicializando a cor como 'vermelho'
    };

    // Configurando um intervalo para atualizar o tempo a cada segundo
    this.interval = setInterval(() => {
      // Atualizando o estado com a nova data e hora
      this.setState((prevState) => ({
        time: new Date().toString(),
        color: prevState.color === 'red' ? 'blue' : 'red', // Alternando a cor entre 'vermelho' e 'azul'
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Limpando o intervalo quando o componente é desmontado
    clearInterval(this.interval);
  }

  // Função para alternar a exibição do relógio
  toggleClock = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { show, color, time } = this.state;

    return (
      <>
        {/* Renderizando o componente apenas se show for verdadeiro */}
        {show && <h3 style={{ color }}>{time}</h3>}
        {/* Botão para alternar a exibição do relógio */}
        <button onClick={this.toggleClock}>
          {show ? 'Esconder' : 'Mostrar'}
        </button>
      </>
    );
  }
}

export default Clock;
