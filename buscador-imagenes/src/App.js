import React, { Component } from "react";

// Componente principal
class App extends Component {
  render() {
    return (
      // en vez de div class usamos className
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
        </div>
      </div>
    );
  }
}

export default App;
