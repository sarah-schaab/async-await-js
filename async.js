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
