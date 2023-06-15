import React from 'react';

const ListadoHoteles = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Habitacion</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdHotel}>
              <td>{item.IdHotel}</td>
              <td>{item.NombreFantasia}</td>
              <td>{item.Habitaciones}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoHoteles;
