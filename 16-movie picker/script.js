const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ac63ef9b1c1903267c74fb2b1672152e";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=ac63ef9b1c1903267c74fb2b1672152e&query="';
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data.results);
  showMovies(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    console.log("11111" + movie);
    // what is this
    const { title, poster_path, vote_average, overview } = movie;
    console.log("222222" + movie);

    const movieEl = document.createElement("div");

    // console.log(movieEl);
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <div class="movie">
    <img src="${IMG_PATH + poster_path}" alt="view" />
    <div class="movie-info">
      <h2>${title}</h2>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
  </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

// $_GET["p"];
// $_GET["ttt"];
// $_POST["aaaa"];

// function delayedAdd(n1, n2, time) {
//   return new Promise(function (resolve, reject) {
//     window.setTimeout(function () {
//       resolve(n1 + n2);
//     }, time);
//   });
// }

// function test() {
//   let promise = delayedAdd(3, 4, 2000);
//   promise.then(function (result) {
//     console.log(result);
//   });
// }

// test();
