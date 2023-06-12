import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from "./Context"
import Home from './Pages/Home'
import MiCuenta from './Pages/MiCuenta'
import MiOrden from './Pages/MiOrden'
import MisOrdenes from './Pages/MisOrdenes'
import NotFound from './Pages/NotFound'
import InicioSesion from './Pages/InicioSesion'
import Navbar from './Components/Navbar'
import './App.css'


const AppRoutes = () =>{
  let routes = useRoutes([
    { path:"/", element:<Home/>},
    { path:"/mis-ordenes", element:<MisOrdenes/>},
    { path:"/mi-cuenta", element:<MiCuenta/>},
    { path:"/mi-orden", element:<MiOrden/>},
    { path:"/*", element:<NotFound/>},
    { path:"/inicio-sesion", element:<InicioSesion/>},
   ])
   return routes
}


const App = () => {
   return (
  <ShoppingCartProvider>
       <BrowserRouter>
     <AppRoutes/>
     <Navbar/>
     </BrowserRouter>
  </ShoppingCartProvider>
 
      
  )
}

export default App
