// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import React from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      productos: 0
    }
  }

  comprarProducto = ()=> {
    this.setState((prevState) => {
      return {
        productos: prevState.productos + 1
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Cabecera productos={this.state.productos} />
        <Listado comprarProducto={this.comprarProducto} />
      </div>
    );
  }
}

export default App;