//Fetch Api
const apiKey ='MhqUYRbsmpzNQdLDG55qddao5X8IWLrt'
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

const peticion = fetch(apiUrl);

// peticion.then( resp => {
//     resp.json().then( data => {
//         console.log( data )
//     })
// }).catch( console.warn() );

//PROMESAS EN CADENA
peticion
    .then( resp => resp.json())
    .then( ( { data } ) => {
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch( console.warn() );