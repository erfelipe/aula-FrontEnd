
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
    <h1>Principal</h1>
    <nav>
      <Link to="/usuarios">Usuarios</Link> |{" "}
      <Link to="/sobre">Sobre</Link>
    </nav>
  </div>

  );
}

export default App;


{/* <Routes>
<Route path='/' element={<Home />} />
<Route path='/clientes' element={<Usuarios />} />
<Route path='/sobre' element={<Sobre />} />
</Routes> */}