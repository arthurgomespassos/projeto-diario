// compactibilidade frontend
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// estilos
import './assets/css/style.css';

// validações front end
import validateUser from './modules/UserValidation';
if (document.querySelector('.login-form')) validateUser('.login-form');
if (document.querySelector('.register-form')) validateUser('.register-form');
