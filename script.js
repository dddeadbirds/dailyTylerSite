const textContainer = document.getElementById('text-container');

const randomPage = Math.abs(Math.floor(Math.random() * 153 + 2));


document.addEventListener('DOMContentLoaded', function () {
    fetch(`src/pages/output_page_${randomPage}.txt`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            // Update the content of the HTML element
            textContainer.innerText = text;
        })
        .catch(error => {
            console.error('Error fetching the text file:', error);
        });
});