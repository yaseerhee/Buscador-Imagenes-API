import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

// Componente principal
class App extends Component {
  // Tambien se puede usar el constructor en vez del state
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth' , 'start');
  }

  paginaAnterior = () => {
    // Primero hay que leer el state de la pagActual
    let pagina = this.state.pagina;
    //Restar uno a la pagActual, excepto si la pagActal es 1
    if (pagina === 1) return null;
    pagina -= 1;
    // Añadir los cambios al state
    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarAPI();
        this.scroll();
      }
    );
  };

  paginaSiguiente = () => {
    // Primero hay que leer el state de la pagActual
    let pagina = this.state.pagina;
    //Sumar uno a la pagActual
    pagina += 1;

    // Añadir los cambios al state
    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarAPI();
        this.scroll();
      }
    );
  };

  consultarAPI = () => {
    // API PIXABAY, PASAMOS EL TERMINO DEL BUSCADOR
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
    // console.log(url);
    // Funcion fetch para recoger todos lo json en un array asociativo
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    // Modificamos la propiedad termino del objeto state y ejecutamos el metodo consultarAPI
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarAPI();
      }
    );
  };

  render() {
    return (
      // en vez de div class usamos className
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
