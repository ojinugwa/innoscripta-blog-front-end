import logo from './logo.svg';
import './App.css';
import SingUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import AppLayout from './Layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Login />
    </AppLayout>
  );
}

export default App;
