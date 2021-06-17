const URL = "https://swapi.dev/api/films/1/";


async function getCharacter(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    
    return { // returnerar ett objekt med enbart de jag ar intresserad av.
        name: data.name,
        birthYear: data.birth_year
    }
}

async function getMovie(url) {
    const response = await fetch(url);
    const data = await response.json();

    return { // returnerar ett objekt med enbart de jag ar intresserad av.
        characters: await Promise.all(data.characters.map(getCharacter)),
        title: data.title
    }
}