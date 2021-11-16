import './App.css';
import { Routes, Route, Link, NavLink, useParams, Outlet } from 'react-router-dom';

const Inicio = () => <h1>Home</h1>;

const BuscarPagina = () => {
  const pages = [
    'pagina-1',
    'pagina-2',
    'pagina-3', 
    'pagina-4'
  ];
  
  return(
    <div>
      <h1>Buscar Pagina</h1>
      <ul>
        {pages.map( (e, i) => (
          <li key={i}> <Link to={`/paginas/${e}`}> {e} </Link> </li>
        ))}
      </ul>
    </div>
  );
};

const Paginas = () => {
  const { nombrePagina } = useParams();
  return (
    <div>
      <h2>Pagina</h2>
      {nombrePagina}
      <Link to='detalle-pagina'>Ir al Detalle Pagina</Link>
      <Outlet/>
    </div>
  )
};

const DetallePagina = () => {
  const {nombrePagina} = useParams();
  return(
    <div>
      <h3>Pagina detalle de {nombrePagina}</h3>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h4>Cesar Cadena ☻</h4>
          <ul>
            <li> 
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : ""
                  };
                }}
                to='/'
                >Home
                </NavLink> 
              </li>
            <li> <Link to='/buscar-pagina'>Buscar Pagina</Link> </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/buscar-pagina' element={<BuscarPagina/>} />
        <Route path='/paginas/:nombrePagina' element={<Paginas/>}> 
          <Route path='detalle-pagina' element={<DetallePagina/>}/>
        </Route> 
        <Route path='*' element={<h3>Pagina no encontrada...</h3>}/>
      </Routes>
    </div>
  );
}

export default App;
