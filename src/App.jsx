import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <LoginPage />
      </main>
    </>
  )
}

export default App
