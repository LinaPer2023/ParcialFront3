// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: props.data.stock
    };
    this.comprarProducto = this.comprarProducto.bind(this);
  }

  comprarProducto() {
    if (this.state.stock < 1) {
      return false;
    }

    this.props.comprarProducto();

    this.setState((prevState) => {
      return {
        stock: prevState.stock - 1
      };
    });
  }

  render() {
    let data = this.props.data;
    let agotado = this.state.stock < 1;
    return (
      <div className='producto'>
        <h3>{data.producto.nombre}</h3>
        <p>{data.producto.descripcion}</p>
        <h5>En stock: {agotado? <span className="agotado">agotado</span> : <span>{this.state.stock}</span>}</h5>
        {agotado? <button disabled>Sin stock</button> : <button onClick={this.comprarProducto}>Comprar</button>}
      </div>
    )
  }
}

export default Item;