//Async-await

const getImagen = async() => {

    try {
        const apiKey ='MhqUYRbsmpzNQdLDG55qddao5X8IWLrt'
        const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`
        const resp = await fetch(apiUrl);
        const { data } = await resp.json(); 

        const url = data.images.original.url; 
        const img = document.createElement('img');
            img.src = url;
            document.body.append(img); 
    } catch (error) {
        console.error(error)
    }

    
}
getImagen();   