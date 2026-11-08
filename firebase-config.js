// Configuración pública de Firebase. No contiene credenciales de administrador.
// La escritura/lectura de Firestore se habilitará después de configurar Auth y reglas.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
export const firebaseConfig = {
  apiKey: "AIzaSyCGZvg4iiSKC1gS1z-vUBxIxSjAHRtXtSc",
  authDomain: "monti-atencion.firebaseapp.com",
  projectId: "monti-atencion",
  storageBucket: "monti-atencion.firebasestorage.app",
  messagingSenderId: "17247004432",
  appId: "1:17247004432:web:61e0d262e4ccb8dda9a795",
  measurementId: "G-QQ70EZH31W"
};
export const firebaseApp = initializeApp(firebaseConfig);
