const img = document.querySelector('img');
const button = document.querySelector('button');
const loader = document.querySelector('#loading');

button.addEventListener('click', () => {
    let searchTerm = document.getElementById('searchTerm').value;
    let weirdnessLevel = document.getElementById('weirdnessLevel').value;
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=zmnpkZ6LhVSNyV2LBaCNTxHsvI6IrI2g&s=${searchTerm}&weirdness=${weirdnessLevel}`;
    displayGif(url);
});

    async function displayGif(url) {
        try {
            img.src = '';
            displayLoading();
            const response = await fetch(url, {mode: 'cors'});
            const gifData = await response.json();
            hideLoading();
            img.src = gifData.data.images.original.url;
        } catch(error) {
            console.error(error)
        }  
    }

    function displayLoading() {
        loader.classList.add("display");
    }

    function hideLoading() {
        loader.classList.remove("display");
    }

    

   
