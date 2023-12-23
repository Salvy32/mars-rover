//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", nasaRover);

function nasaRover() {
  const rover = document.querySelector("input").value;
  console.log(rover);

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${rover}&api_key=KiyhJcspmIZul8HNQ41NsuIwJwQLlfvUgAnePA5G&`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector(".rover").src = data.photos[0].img_src;
      document.querySelector("h2").innerText = data.photos[0].rover.name;
      document.querySelector(".status").innerText = data.photos[0].rover.status;
      document.querySelector(".camera").innerText =
        data.photos[0].camera.full_name;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
