const h1 = document.getElementById("title");
const ul = document.getElementById("ul");


function createLi(text) {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
}


async function main() {
    const movie = await getMovie(URL);
    const title = movie.title;
    const characters = movie.characters;

    h1.innerText = "Movie: " + title;

    characters.forEach(function(character){
        ul.appendChild(createLi(character.name));
    });
}

main();