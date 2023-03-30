import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () =>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setisLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [ ])

    getGifs( category );
    
    return {
        images: images,
        isLoading: isLoading
    }
}
