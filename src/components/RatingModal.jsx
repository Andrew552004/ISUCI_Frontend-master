import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

function RatingModal() {
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleRatingChange = (rate) => {
        setRating(rate);
    };

    const rate = async () => {
        setRating(0);
        document.getElementById('modal_rate').close();
    }

    return (
        <div>
            <dialog id="modal_rate" className="modal">
                <div className="modal-box w-11/12 max-w-3xl mx-auto">
                    <h3 className="font-bold text-3xl text-blue-500 text-center">
                        Califica a <span className="text-gray-800">Nombre Representante</span>
                    </h3>
                    <div className="py-4 text-center">
                        <p className="mb-4 text-lg">Selecciona una calificación para el servicio:</p>
                        <div className="flex flex-col items-center">
                        <Rating
                            initialRating={rating}
                            onChange={handleRatingChange}
                            fullSymbol={<FaStar className="text-yellow-500 text-4xl" />} // Cambio de color a amarillo para estrellas llenas
                            emptySymbol={<FaRegStar className="text-gray-300 text-4xl" />} // Cambio de color a gris claro para estrellas vacías
                            fractions={1}
                        />
                        <textarea 
                            className="w-10/12 min-h-32 mt-6 p-4 border-2 border-gray-300 rounded-md"
                            name="comments" id="comments" />
                        </div>
                    </div>
                    <div className="modal-action items-center justify-end mt-2">
                        <button onClick={rate}
                            className="flex justify-between bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Calificar
                        </button>
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default RatingModal;
