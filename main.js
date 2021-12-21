const img = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let searchTerm = document.getElementById('searchTerm').value;
    let weirdnessLevel = document.getElementById('weirdnessLevel').value;
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=zmnpkZ6LhVSNyV2LBaCNTxHsvI6IrI2g&s=${searchTerm}&weirdness=${weirdnessLevel}`
    console.log(url)

    fetch(url, {mode: 'cors'})
        .then((response) => {
            return response.json();
        }).then((response) => {
            img.src = response.data.images.original.url;
         }).catch((error)=> {
            if(searchTerm === '') {
                alert('Please provide a search term');
            }
            else {
                alert(`No results found for ${searchTerm}`);
            }
        });

    })
