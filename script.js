async function fetchCatFact() {
  const catContent = document.getElementById("cat-content");
  catContent.textContent = "Loading cat fact...";

  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    console.log("Cat fact data:", data);

    catContent.textContent = data.fact;
  } catch (error) {
    console.error("Cat fact error:", error);
    catContent.textContent = "Failed to load cat fact.";
  }
}

async function fetchDogImage() {
  const dogContent = document.getElementById("dog-content");
  dogContent.textContent = "Loading dog picture...";

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    console.log("Dog image data:", data);

    dogContent.innerHTML = `<img src="${data.message}" alt="Random dog" />`;
  } catch (error) {
    console.error("Dog image error:", error);
    dogContent.textContent = "Failed to load dog picture.";
  }
}

function fetchCoffeeImage() {
  const coffeeContent = document.getElementById("coffee-content");
  const imageUrl = `https://coffee.alexflipnote.dev/random?${Date.now()}`;

  coffeeContent.innerHTML = `
    <img src="${imageUrl}" alt="Random coffee" />
  `;
}

async function fetchWeather() {
  const weatherContent = document.getElementById("weather-content");
  weatherContent.textContent = "Loading weather...";

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=38.8462&longitude=-77.3064&current=temperature_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit",
    );

    const data = await response.json();

    console.log("Weather data:", data);

    weatherContent.innerHTML = `
      <p><strong>Location:</strong> Fairfax, VA</p>
      <p><strong>Temperature:</strong> ${data.current.temperature_2m}°F</p>
      <p><strong>Wind Speed:</strong> ${data.current.wind_speed_10m} km/h</p>
      <p><strong>Weather Code:</strong> ${data.current.weather_code}</p>
    `;
  } catch (error) {
    console.error("Weather error:", error);
    weatherContent.textContent = "Failed to load weather.";
  }
}

async function fetchJoke() {
  const jokeContent = document.getElementById("joke-content");
  jokeContent.textContent = "Loading joke...";

  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit",
    );
    const data = await response.json();

    console.log("Joke data:", data);

    if (data.type === "single") {
      jokeContent.innerHTML = `<p>${data.joke}</p>`;
    } else {
      jokeContent.innerHTML = `
        <p><strong>${data.setup}</strong></p>
        <p>${data.delivery}</p>
      `;
    }
  } catch (error) {
    console.error("Joke error:", error);
    jokeContent.textContent = "Failed to load joke.";
  }
}

async function fetchLyrics() {
  const lyricsContent = document.getElementById("lyrics-content");
  const artist = document.getElementById("artist-input").value.trim();
  const song = document.getElementById("song-input").value.trim();

  if (!artist || !song) {
    lyricsContent.textContent = "Please enter both an artist and a song title.";
    return;
  }

  lyricsContent.textContent = "Loading lyrics...";

  try {
    const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await response.json();

    console.log("Lyrics data:", data);

    if (data.lyrics) {
      lyricsContent.innerHTML = `<pre>${data.lyrics}</pre>`;
    } else {
      lyricsContent.textContent = "Lyrics not found.";
    }
  } catch (error) {
    console.error("Lyrics error:", error);
    lyricsContent.textContent = "Failed to load lyrics.";
  }
}

async function fetchCalendarInfo() {
  const calendarContent = document.getElementById("calendar-content");
  calendarContent.textContent = "Loading holiday calendar...";

  try {
    const response = await fetch(
      "https://the-calendar.net/api/holidays/us-federal/2026.json",
    );
    const data = await response.json();

    console.log("Calendar data:", data);

    const holidays = data.holidays;

    if (!holidays || holidays.length === 0) {
      calendarContent.textContent = "No holiday data found.";
      return;
    }

    calendarContent.innerHTML = `
      <ul>
        ${holidays
          .slice(0, 6)
          .map(
            (holiday) =>
              `<li><strong>${holiday.name}</strong> - ${holiday.date}</li>`,
          )
          .join("")}
      </ul>
    `;
  } catch (error) {
    console.error("Calendar error:", error);
    calendarContent.textContent = "Failed to load holiday calendar.";
  }
}

async function fetchAnimeQuote() {
  const animeContent = document.getElementById("anime-content");
  animeContent.textContent = "Loading anime quote...";

  try {
    const response = await fetch("https://api.animechan.io/v1/quotes/random");
    const result = await response.json();

    console.log("Anime quote data:", result);

    const quoteItem = result.data;

    if (!quoteItem) {
      animeContent.textContent = "No anime quote found.";
      return;
    }

    animeContent.innerHTML = `
      <p><strong>Anime:</strong> ${quoteItem.anime.name}</p>
      <p><strong>Character:</strong> ${quoteItem.character.name}</p>
      <p>"${quoteItem.content}"</p>
    `;
  } catch (error) {
    console.error("Anime quote error:", error);
    animeContent.textContent = "Failed to load anime quote.";
  }
}

fetchCatFact();
fetchDogImage();
fetchCoffeeImage();
fetchWeather();
fetchJoke();
fetchCalendarInfo();
fetchAnimeQuote();

document.getElementById("cat-btn").addEventListener("click", fetchCatFact);
document.getElementById("dog-btn").addEventListener("click", fetchDogImage);
document
  .getElementById("coffee-btn")
  .addEventListener("click", fetchCoffeeImage);
document.getElementById("weather-btn").addEventListener("click", fetchWeather);
document.getElementById("joke-btn").addEventListener("click", fetchJoke);
document.getElementById("lyrics-btn").addEventListener("click", fetchLyrics);
document
  .getElementById("calendar-btn")
  .addEventListener("click", fetchCalendarInfo);
document.getElementById("anime-btn").addEventListener("click", fetchAnimeQuote);
