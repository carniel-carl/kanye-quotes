const apiUrl = "https://api.kanye.rest"

const quoteText = document.querySelector(".text");
const button = document.querySelector(".kanye-btn");

function getData() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            
            const quote = data.quote
            console.log(quote)

            quoteText.classList.add("kanye-quote")

            quoteText.innerHTML = quote
        })
};

button.addEventListener("click", getData)
