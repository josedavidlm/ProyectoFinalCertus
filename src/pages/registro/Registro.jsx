import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from "../../components/inputs/Inputs";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as Yup from "yup"

export const Registro =()=>{
    
    const schema = Yup.object({
        email: Yup.string().required("El Email es requerido").email("invalid email"),
        password: Yup.string().required("La contraseña es requerida")
    })
    const styleInput = "py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    return(
    <div>
    <div className="font-sans">
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
    <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label for="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                Registrate
            </label>
            <form onChange={handleSubmit} method="#" action="#" className="mt-10">

                    <div>
                        <InputForm type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                        name="nombre" style={styleInput} register={register} errors={errors}/>
                    </div>

                    <div className="mt-7">                
                        <InputForm type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                        name="email" style={styleInput} register={register} errors={errors}/>                           
                    </div>

                    <div className="mt-7">                
                        <InputForm type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                        name="password" style={styleInput} register={register} errors={errors}/>                           
                    </div>

                    <div className="mt-7">                
                        <InputForm type="password" placeholder="Confirmar contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                        name="password" style={styleInput} register={register} errors={errors}/>                           
                    </div>
                
    
                <div className="mt-7">
                    <button type='submit' className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                        Registrar
                    </button>
                </div>
    
                <div class="flex mt-7 items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md"/>
                    <label class="block font-medium text-sm text-gray-600 w-full">
                        Registrate con
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md"/>
                </div>
    
                <div className="flex mt-7 justify-center w-full">
                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                        
                        Facebook
                    </button>
    
                    <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                        
                        Google
                    </button>
                </div>
    
                <div className="mt-7">
                    <div className="flex justify-center items-center">
                        <label className="mr-2" >¿Ya tienes una cuenta?</label>
                        <Link to="/login" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Iniciar sesion
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
    </div>
    
)
}