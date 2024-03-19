import { useEffect, useState } from "react";

const Itineries = ({ props }) => {
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        // Actualiza el estado local con las props recibidas
        setItineraries(props);
    }, [props]);

    {/*//Recorro el array de hashtags
    const hashtags = itineraries.hashtags.map((hashtag, index) => (
        <span key={index} className="mr-2">#{hashtag}</span>
      ));

    //Recorro el array de imagenes
    const images = itineraries.activities.map((image, index) => (
        <img key={index} src={image} alt="image of tour" className="w-20 h-20 m-2" />
    ));*/}

    {/*Itineraries esta cargado con lo que viene de props, en este caso los itinerarios */}
    return (
        <div className="flex gap-4">
            {/*Recorro itineraries con el map, y por cada elemento del array (itinerary) ingreso a las key/value
             de los objetos y le pongo el index para que me lo haga las cant de veces igual a la de elementos del array */}

            {itineraries.map((itinerary, index) => (
                <div key={index} className="flex flex-col border-2 justify-center items-center mb-4 p-4">
                    <div className="flex justify-center items-center gap-8">
                        <h4>{itinerary.guide}</h4>
                        <img src={`${itinerary.guide_image}`} alt="guide image" />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <h4>Duration: {itinerary.duration} hours</h4>
                        {/* resolver el tema de la guita */}
                        <div className="flex">
                            <h4>Price</h4>
                        {[...Array(itinerary.price)].map((_, n) => (
                            <span  key={n}>💲</span>
                        ))}
                        </div>
                        {/* Recorrer y mostrar hashtags si existen */}
                        {itinerary.hashtags && itinerary.hashtags.map((hashtag, index) => (
                            <span key={index} className="mr-2">{hashtag}</span>
                        ))}

                        <div className="flex gap-6">
                            {/* Recorrer y mostrar imágenes si existen */}
                        {itinerary.activities && itinerary.activities.map((image, index) => (
                            <img key={index} src={image} alt="image of tour" className="w-20 h-20 m-2" />
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Itineries;
//