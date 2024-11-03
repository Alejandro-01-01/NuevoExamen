import React from 'react';
import ExamenNuevo from './components/ExamenNuevo'; 

const App = () => {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <ExamenNuevo />
    </div>
  );
};

export default App;
