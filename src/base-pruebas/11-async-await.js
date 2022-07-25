export const getImagen = async() => {

    try {

        const apiKey = '1v2hqYCBZLFq6mJAq7uVIcPZ1tkgU942';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

       return url;

    } catch (error) {
        return "No se encontró la imágen";
    }
    
    
    
}

 getImagen();



