import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

function App() {
  return [<Navbar key="navbar" />, <LoginForm key="login-form" />];
}


export default App;
