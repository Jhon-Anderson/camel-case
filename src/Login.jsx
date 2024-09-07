import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Para redirigir
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Hook de redirección

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    // Validar dominio del correo
    if (!email.endsWith('@correounivalle.edu.co')) {
      setModalMessage('Por favor, usa un correo con el dominio @correounivalle.edu.co');
      setIsModalOpen(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
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
