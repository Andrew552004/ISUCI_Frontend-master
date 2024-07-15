import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppBase from "../components/AppBase";

function HomePage() {
  const [products, setProducts] = useState([]);
  const baseURL = "http://localhost:44347/api";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/producto/`, {
          headers: {
            user: localStorage.getItem("user") || "",
            password: localStorage.getItem("password") || "",
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener la simulación:", error);
        toast.error(`Error al obtener la simulación: ${error.response.data}`, {
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
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <AppBase>
        <div className="text-4xl font-bold px-6 py-4">Simulación</div>
      </AppBase>
      <ToastContainer />
    </div>
  );
}

export default HomePage;
