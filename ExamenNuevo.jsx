import React, { useState } from 'react';

function ExamenNuevo() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('');
  const [informacionAdicional, setInformacionAdicional] = useState('');
  const [terminosAceptados, setTerminosAceptados] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado con los siguientes datos:', {
      nombre,
      correo,
      cantidad,
      tipoEntrega,
      informacionAdicional,
      terminosAceptados,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '10px' }}>Telmex</h1>
        <h2 style={{ marginBottom: '20px' }}>Cotizar producto</h2>
        <p>Obtén tu cotización personalizada en segundos.</p>
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: 'left' }}>Información de contacto</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nombre" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="correo" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Correo:</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <h3 style={{ textAlign: 'left' }}>Información adicional</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="informacionAdicional" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Información adicional:</label>
            <textarea
              id="informacionAdicional"
              value={informacionAdicional}
              onChange={(e) => setInformacionAdicional(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <h3 style={{ textAlign: 'left' }}>Detalles del pedido</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="cantidad" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Cantidad de productos:</label>
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="tipoEntrega" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Tipo de entrega:</label>
            <input
              type="text"
              id="tipoEntrega"
              value={tipoEntrega}
              onChange={(e) => setTipoEntrega(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <label>
              <input
                type="checkbox"
                checked={terminosAceptados}
                onChange={(e) => setTerminosAceptados(e.target.checked)}
              />
              {' '}Acepto los términos y condiciones
            </label>
          </div>
          <button type="submit" style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#28a745',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px'
          }}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ExamenNuevo;
