const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// getUserName("bradtraversy");

async function getUserName(userName) {
  try {
    const { data } = await axios(API_URL + userName);
    getRepos(userName);
    fillContent(data);
  } catch (err) {
    if (err.response.status == 404) {
      main.innerHTML = `
        <h2>404 Not found...</h2>
        <div>Try another user name.</div>
        `;
    }
  }
}
async function getRepos(userName) {
  try {
    const { data } = await axios(API_URL + userName + "/repos?sort=created");
    // console.log(data);
    addRepos(data);
  } catch (err) {
    console.log(err);
  }
}

function addRepos(repos) {
  const reposEl = document.getElementById("repos");
  repos.forEach((e) => {
    const reposLink = document.createElement("a");
    reposLink.classList.add("repos");
    reposLink.href = e.html_url;
    reposLink.target = "_blank";
    reposLink.innerText = e.name;
    reposEl.appendChild(reposLink);
  });
}

function fillContent(e) {
  const cardHTML = `
    
    <div class="card">
    <div>
      <img src="${e.avatar_url}" alt="${e.name}" />
    </div>
    <div class="user-info">
      <h2>${e.name}</h2>
      <p>${e.bio}
      </p>

      <ul>
        <li>${e.followers}<strong>Followers</strong></li>
        <li>${e.following}<strong>Followings</strong></li>
        <li>${e.public_repos}<strong>Repos</strong></li>
      </ul>
      <div id="repos">
        
      </div>
    </div>
  </div>`;
  main.innerHTML = cardHTML;
}

function showError() {
  main.innerHTML = `
    <h2>Not found...</h2>
    `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = search.value;
  getUserName(userName);
  //   getRepos(userName);
});
