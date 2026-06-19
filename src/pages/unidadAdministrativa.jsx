import ShowUnidadAdministrativa from '../components/unidadAdministrativa/show';
import './unidadAdministrativa.css';

function UnidadAdministrativa() {
  return (
    <div className="main-window">
        <div className="system-header">SISTEMA DE ACTIVOS FIJOS</div>
        <div className="unit-bar">Unidad Administrativa</div>

        <div className="gradient-title">
            Administración Unidad Administrativa
        </div>

        <div className="content-container">
            <div className="table-scroll-area">
                <ShowUnidadAdministrativa />
            </div>

            <div className="control-panel">
                <button className="nav-btn">Nuevo</button>
                <button className="nav-btn">Editar</button>
                <button className="nav-btn">Eliminar</button>
                <button className="nav-btn btn-highlight">Seleccionar</button>
                <button className="nav-btn">Salir</button>
            </div>
        </div>
    </div>
  );
}

export default UnidadAdministrativa;
