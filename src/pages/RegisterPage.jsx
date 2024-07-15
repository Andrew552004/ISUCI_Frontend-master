import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import bgimage from "../assets/bgimage.jpg";
import { AuthService } from "../redux/services/authentication.service";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slices/authentication.slice";

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authselector = useSelector(state=>state.loggedUser);
    const appselector = useSelector(state=>state.app);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(()=>{

        if (authselector.done && !authselector.error && !appselector.loading){
            
            toast.success('Registro exitoso', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
    },[appselector.loading])


    useEffect(()=>{
        if(!appselector.loading && !authselector.done && authselector.error) 
            {
                toast.error(appselector.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
    },[authselector.error])

    useEffect(()=>{
        if (authselector.done && !authselector.loading){
           navigate("/home",{replace: true});
        }
    },[authselector.userData])

    const handleRegister = async() => {
        if (!name || !email ||!lastName|| !password || !confirmPassword) {
            toast.error('Todos los campos son obligatorios', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Las contraseñas no coinciden', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        dispatch(register(
            { 
                userName: name,
                userLastName: lastName,
                userEmail: email,
                userPassword: password,
                userPasswordCofirmation: confirmPassword
            }
         ))

    }

    return (
        <div
            className="bg-no-repeat bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bgimage})`,
            }}
        >
            <div className="absolute bg-gradient-to-b from-green-300 
                            to-gray-700 opacity-55 inset-0 z-0">
            </div>
            <ToastContainer />

            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col text-white">
                        <img src="" alt="" className="mb-3" />
                        <h1 className="mb-3 font-bold text-5xl">
                            Bienvenido a ISUCI
                        </h1>
                        <p className="pr-3 text-3xl">
                            Registrate para acceder a los servicios de ISUCI.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center self-center z-10 w-1/3 h-1/2">

                    <div className="p-12 bg-white mx-auto rounded-2xl w-full">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">
                                Registrarse
                            </h3>
                        </div>

                        <div className="pt-2">
                            <input
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                type="text"
                                placeholder="Nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="pt-2">
                            <input
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                type="text"
                                placeholder="Apellido"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="pt-2">
                            <input
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                type="text"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="pt-2">
                            <input
                                className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                type="password"
                                placeholder="Crear contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="pt-2">
                            <input
                                className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                type="password"
                                placeholder="Confirmar contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                onClick={handleRegister}
                                type="button"
                                className="w-full flex justify-center bg-blue-400 hover:bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-200 mt-5"
                            >
                                Registrarse
                            </button>
                        </div>

                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2024 ISUCI
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
