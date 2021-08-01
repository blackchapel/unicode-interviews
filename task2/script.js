async function loadCharacters() {
    const response = (await fetch("https://www.breakingbadapi.com/api/characters")).json();
    console.log(response);
}

loadCharacters();