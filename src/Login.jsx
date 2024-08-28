import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebaseConfig';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    // Validar que el correo sea del dominio correcto
    if (!email.endsWith('@correounivalle.edu.co')) {
      setModalMessage('Por favor, usa un correo con el dominio @correounivalle.edu.co');
      setIsModalOpen(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        setModalMessage('Inicio de sesión exitoso');
        setIsModalOpen(true);
      })
      .catch((error) => {
        if (error.code) {
          // Si el usuario no existe, registrarlo
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Registro e inicio de sesión exitosos
              setModalMessage('Registro e inicio de sesión exitosos');
              setIsModalOpen(true);
            })
            .catch((error) => {
              // Manejo de errores de registro
              setModalMessage(`Error al registrar: ${error.message}`);
              setIsModalOpen(true);
            });
        } else {
          // Manejo de otros errores de inicio de sesión
          setModalMessage(`Error al iniciar sesión: ${error.message}`);
          setIsModalOpen(true);
        }
      });
  };

  return (
    <div className="login-container">
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