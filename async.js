const fetch = require('node-fetch');

// simple example of an async function declaration
async function showGitHubUser(handle) {
  const url =  `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

showGitHubUser("sarah-schaab")
  .then(response => {
      console.log(response.name);
      console.log(response.location);
  })

// async arrow function

const getGithubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
};

getGithubUser("sarah-schaab")
  .then(response => {
      console.log(response.name);
      console.log(response.location);
})

// async function expression
const fetchGithubUser = async function(handle) {
  const url =  `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
};

  fetchGithubUser("sarah-schaab")
    .then(response => {
        console.log(response.name);
        console.log(response.location);
})

// async function wrapper
class GitHubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  const client = new GitHubApiClient();
  const user = client.fetchUser("sarah-schaab");
  console.log(user.name);
  console.log(user.location);
})();
