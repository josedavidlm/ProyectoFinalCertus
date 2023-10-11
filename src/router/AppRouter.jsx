import { Route,Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login"
import { Carrito } from "../components/carrito/Carrito"
import { Registro } from "../pages/registro/Registro"
import { Inicio } from "../pages/home/Inicio"
export const AppRouter=()=>{
    return(
        <Routes>            

            <Route path="/" element ={<Inicio/>}/>
            <Route path="/catalogo" element ={<Home/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/carrito" element ={<Carrito/>}/>
            <Route path="/registro" element={<Registro/>}/>            

        </Routes>
    )
}