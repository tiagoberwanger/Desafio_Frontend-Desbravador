const usernameForm = document.getElementById("username-form");

const searchButton = document.getElementById("search-btn");

usernameForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const searchInput = document.getElementById('search-input').value;
  const formatedName = searchInput.split(' ').join('');

  fetch(`https://api.github.com/users/${formatedName}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById('result').innerHTML = `
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
