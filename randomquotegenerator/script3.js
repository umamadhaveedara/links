const quote = document.querySelector(".quote h2");
const btn = document.querySelector(".btn");

function generatejoke(){
  const config = {
    headers: {
      Accept : 'application/json'
    }
  }
  fetch("https://icanhazdadjoke.com", config)
  .then(res => res.json())
  .then(data => quote.innerHTML = data.joke)
}

btn.addEventListener("click", generatejoke)

