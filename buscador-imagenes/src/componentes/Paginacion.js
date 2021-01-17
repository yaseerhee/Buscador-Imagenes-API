import React from 'react';

const Paginacion = props => {
    return (
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-danger mr-1">Anterior</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-danger mr-1">Siguiente</button>
        </div>

    )
}
export default Paginacion;
