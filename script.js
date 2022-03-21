const container = document.querySelector('.container h3');
const getJoke = document.getElementById('get-joke');
getJoke.addEventListener('click',fetchJoke);

fetchJoke();

async function fetchJoke(){
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            Accept: "application/json"
        }
    });

    const joke = await res.json();
    container.innerHTML = joke.joke;
    console.log(res);
}