import { createContext, useEffect, useState } from "react"


export const VentaContext = createContext()

export const AppContext =({children})=>{


    const [cart, setCart] = useState([]);


    const addProductoToList = (Producto)=> {
        const list = document.getElementById('Producto-list');
        // Create table row element
        const row = document.createElement('tr');
        // Insert columns
        row.innerHTML = `
            <td>${Producto.title}</td>
            <td>${Producto.quantity}</td>
            <td>${Producto.price}</td>
            <td>${Producto.subTotal}</td>
            <td><a href="#" class="delete">X</a> </td>
        `;

        list.appendChild(row);
    };



    return(
        
        <>
        <VentaContext.Provider value={{cart, setCart}}>
            {children}
        </VentaContext.Provider>

        </>
    )

}