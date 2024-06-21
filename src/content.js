document.querySelectorAll('img').forEach(function(img) {
    console.log('img.src', img.src);
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                img.src = 'https://http.cat/404';
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            img.src = data[0].url;
        })
        .catch(error => img.src = 'https://http.cat/404');
});