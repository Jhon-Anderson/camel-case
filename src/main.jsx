import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router y Routes
import Login from './Login.jsx';
import Scene3D from './Scene3D.jsx'; // Importa el componente 3D que crearás
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import World from './World.jsx';
>>>>>>> jbaa

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />      {/* Ruta para el Login */}
        <Route path="/inicio" element={<Scene3D />} />  {/* Ruta para el escenario 3D */}
      </Routes>
    </Router>
  </StrictMode>
=======
        <Route path="/" element={<Login />} />
        <Route path="/world" element={<World />} />
      </Routes>
    </Router>
  </StrictMode>,
>>>>>>> jbaa
);
