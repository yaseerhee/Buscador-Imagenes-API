import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

// Componente principal
class App extends Component {
  // Tambien se puede usar el constructor en vez del state
  state = {
    termino : '',
    imagenes : []
  }

  consultarAPI = () => {
    // API PIXABAY, PASAMOS EL TERMINO DEL BUSCADOR
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30`;
    // console.log(url);
    // Funcion fetch para recoger todos lo json en un array asociativo 
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({ imagenes : resultado.hits }) )
  }

  datosBusqueda = (termino) => {
    // Modificamos la propiedad termino del objeto state y ejecutamos el metodo consultarAPI
    this.setState(
      {termino}, () => {
        this.consultarAPI();
      });
  };

  render() {
    return (
      // en vez de div class usamos className
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado imagenes = {this.state.imagenes}/>
      </div>
    );
  }
}

export default App;
