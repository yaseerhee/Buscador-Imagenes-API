import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();
    //Cogemos el valor del Input
    const termino = this.busquedaRef.current.value;

    // Enviamos los datos al componente principal
    this.props.datosBusqueda(termino);

    // console.log(this.busquedaRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          {/* {this.props.mensaje} pasar mensajes por props */}
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu imagen..."
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
