const API_KEY = "eeb1a04e3ab84c8090acdf822df58cc3"; // ключ з RAWG

async function getGameRating(gameName, cardId) {

    const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${gameName}`;

    const response = await fetch(url);
    const data = await response.json();

    const rating = data.results[0].rating;

    const starsElement = document.querySelector(`#${cardId} .stars`);

    starsElement.innerHTML = generateStars(rating);
}

function generateStars(rating) {

    const fullStars = Math.round(rating);
    let stars = "";

    for (let i = 0; i < fullStars; i++) {
        stars += "★";
    }

    for (let i = fullStars; i < 5; i++) {
        stars += "☆";
    }

    return stars + ` (${rating})`;
}


getGameRating("minecraft", "minecraft");
getGameRating("mafia ii", "mafia");
getGameRating("gta v", "gta");