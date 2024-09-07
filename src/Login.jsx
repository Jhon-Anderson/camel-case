<<<<<<< HEAD
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Para redirigir
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from './firebaseConfig';
>>>>>>> jbaa
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
<<<<<<< HEAD
  const navigate = useNavigate(); // Hook de redirección
=======
  const navigate = useNavigate();
>>>>>>> jbaa

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

<<<<<<< HEAD
    // Validar dominio del correo
=======
    // Validar que el correo sea del dominio correcto
>>>>>>> jbaa
    if (!email.endsWith('@correounivalle.edu.co')) {
      setModalMessage('Por favor, usa un correo con el dominio @correounivalle.edu.co');
      setIsModalOpen(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
<<<<<<< HEAD
      .then(() => {
        setModalMessage('Inicio de sesión exitoso');
        setIsModalOpen(true);

        // Redirigir a la página de inicio con la escena 3D
        navigate('/inicio');
      })
      .catch((error) => {
        if (error.code) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
              setModalMessage('Registro e inicio de sesión exitosos');
              setIsModalOpen(true);
              navigate('/inicio'); // Redirigir tras el registro exitoso
            })
            .catch((error) => {
=======
      .then((userCredential) => {
        // Inicio de sesión exitoso
        setModalMessage('Inicio de sesión exitoso');
        setIsModalOpen(true);
        setTimeout(() => navigate('/World'), 1000);
      })
      .catch((error) => {
        if (error.code) {
          // Si el usuario no existe, registrarlo
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setModalMessage('Registro e inicio de sesión exitosos');
              setIsModalOpen(true);
              setTimeout(() => navigate('/World'), 1000);
            })
            .catch((error) => {
              // Manejo de errores de registro
>>>>>>> jbaa
              setModalMessage(`Error al registrar: ${error.message}`);
              setIsModalOpen(true);
            });
        } else {
          setModalMessage(`Error al iniciar sesión: ${error.message}`);
          setIsModalOpen(true);
        }
      });
  };

  return (
    <div className="login-container">
<<<<<<< HEAD
=======
      <div className="logo-container">
        <img src="/LogoTerraNova.png" alt="Logo TerraNova" />
      </div>
>>>>>>> jbaa
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalMessage}</p>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
