var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        
      var userLogin = document.createElement('h2');
      var userUrl = document.createElement("p");

      userLogin.textContent = data[i].login;
      userUrl.textContent = data[i].url;

      userContainer.appendChild(userLogin);
      userContainer.appendChild(userUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
