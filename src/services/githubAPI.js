const fetchUsername = (username) => {

} 


const fetchUsernameRepos = (username) => {
  fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
} 

const fetchRepoDetails = (fullname) => {
  fetch(`https://api.github.com/repos/${fullname}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
} 

export {
  fetchUsername,
  fetchUsernameRepos,
  fetchRepoDetails
}