import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);

    const fetchCart = async () => {
        try {
            const response = await axios.get("/api/cart");
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    const saveCart = async (newCart) => {
        try {
            await axios.post("/api/cart", newCart);
            setCart(newCart);
        } catch (error) {
            console.error("Error saving cart:", error);
        }
    };

    const fetchClients = async () => {
        try {
            // const response = await axios.get("/api/clients");
            // setClients(response.data);
            setClients([
                { id: 1, name: 'Walter White' },
                { id: 2, name: 'Rick Grimes' }
            ]);

        } catch (error) {
            console.error("Error fetching clients:", error);
        }
    };

    const handleClientChange = async (clientId) => {
        setSelectedClient(clientId);
        try {
            const response = await axios.get(`/api/cart?clientId=${clientId}`);
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart for client:", error);
        }
    };

    useEffect(() => {
        fetchCart();
        fetchClients();
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                cart,
                saveCart,
                clients,
                selectedClient,
                handleClientChange,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
