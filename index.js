function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    const apiKey = "35e17c296b0bd189fb968b8a5a8a518d";
    
    if (searchInpu == "") {
        weatherDataSection.innerHTML = `
        <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return
    }
}