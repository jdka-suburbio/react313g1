import { useEffect, useState } from "react";

function ShowUnidadAdministrativa() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() 
        {
            let response = await fetch('https://fuerza-g-grupo-1-9lb7.onrender.com/unidadadmin');
            let jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);    

    return (
               <table className="data-grid">
                    <thead>
                        <tr>
                            <th style={{ width: '20%' }}>UNIDAD</th>
                            <th style={{ width: '50%' }}>DESCRIPCION</th>
                            <th style={{ width: '30%' }}>CIUDAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((unidad) => (
                            <tr key={unidad.id} className="active-row">
                                <td>{unidad.unidad}</td>
                                <td>{unidad.descrip}</td>
                                <td>{unidad.ciudad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    );
}

export default ShowUnidadAdministrativa;