import { BiUserCircle } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import { VentaContext } from "../../context/AppContext";
import { useContext } from "react";
export const Navbar = () => {    

    

    const{cart, setCart} = useContext(VentaContext)

    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    const navStyles = {
        color: "#fff",
        listStyle: "none",
        textDecoration: "none",
      };

    return (
    <nav className="bg-red-400  ">
      <div className="w-full mx-auto">
        <div className="mx-9 flex flex-wrap items-center justify-between">
            <a href="#" className="flex">
            <img src="https://www.certus.edu.pe/blog/wp-content/uploads/2019/01/favicon-png.png" alt="" width={80}/>
          </a>

          <div className="flex md:hidden md:order-2">
            <button data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex justify-between md:w-auto md:order-1" id="mobile-menu-3" >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center">
              <li>
                <Link to={"/"} className="bg-blue-500 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded">Inicio</Link>                
              </li>

              <li>
                <Link to={"/catalogo"} className="bg-blue-500 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded">Catalogo de Productos</Link>                
                
              </li>

              <li className="nav-list">
                    <Link to={"/cart"} style={navStyles}>
                    Carrito items <span className="cart-count" >{quantity}</span>
                    </Link>
               </li>
              
              <button className="bg-blue-500 text-white rounded-md font-bold py-2 px-5">
                <Link to={"/login"}>Iniciar Sesion</Link>
              </button>              
              <button className="bg-blue-500 text-white rounded-md font-bold py-2 px-5">
                <Link to={"/registro"}>Crear Cuenta</Link>
              </button>  

   

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
