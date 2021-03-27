// Elementos do HTML
const usernameForm = document.getElementById("username-form");
const reposForm = document.getElementById("repos-form");
const repoDetailForm = document.getElementById("repo-detail-form")

// Ferramenta de busca de usuários
usernameForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const userSearchInput = document.getElementById('user-search-input').value;
  const formatedName = userSearchInput.split(' ').join('');

  fetch(`https://api.github.com/users/${formatedName}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById('user-result').innerHTML = `
    <div class="card">
      <img class="card-img-top" src=${data.avatar_url} alt="avatar">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-subtitle">${data.bio}
        <p class="card-text">${data.email ? data.email : "Sem e-mail cadastrado!"}
        <p class="card-text">Seguidores: ${data.followers}
        <p class="card-text">Seguindo: ${data.following}
        <hr>
        <a href=${data.html_url} target="_blank" class="card-link">Link do Github</a>
      </div>
    </div>
    `
  })
  .catch(error => console.error(error))
})

// Ferramenta de listagem de repositórios
reposForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const reposSearchInput = document.getElementById('repos-search-input').value;
  const formatedName = reposSearchInput.split(' ').join('');

  fetch(`https://api.github.com/users/${formatedName}/repos`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById('repos-result').innerHTML = `
    ${data.map((repo) => (
      `
      <ul class="list-group">
      <li class="list-group-item">
      ${repo.full_name}
      </li>
      </ul>
      `
    ))
    }
    `
  })
  .catch(error => console.error(error))
})


