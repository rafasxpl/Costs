import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/layout/Footer/Footer'
import NavBar from './components/layout/NavBar/NavBar';
import Container from './components/layout/Container/Container'
import {Rotas} from './components/Routes/Rotas'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Rotas />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;