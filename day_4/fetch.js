const show = document.getElementById("alertShow");
const container = document.getElementById("container");

const usersData = document.getElementById("usersData");
function data() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())

    .then(
      (json) =>
        (usersData.innerHTML = json
          .map(
            (user) => `
    <tr>
      <th>${user.id}</th>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.address.city}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
      <td>${user.company.name}</td>
    </tr>
    `
          )
          .join(""))
    )
    .catch((error) => console.log(error));
  alertShow();
  setTimeout(() => {
    container.classList.remove("hidden");
    show.classList.add("hidden");
  }, 500);
}

function post() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(
      (json) =>
        (usersData.innerHTML = json
          .map(
            (user) => `
    <tr>
      <th>${user.id}</th>
      <td>${user.userId}</td>
      <td>${user.title}</td>
      <td>${user.body}</td>
    </tr>
    `
          )
          .join(""))
    )

    .catch((error) => console.log(error));
  alertShow();
  setTimeout(() => {
    container.classList.remove("hidden");
    show.classList.add("hidden");
  }, 500);
}

function alertShow() {
  const show = document.getElementById("alertShow");
  const htmlShow = `
      <span class="loading loading-bars loading-lg"></span>
    `;

  show.classList.add("w-full", "min-h-screen");
  show.innerHTML += htmlShow;
  container.classList.add("hidden");
}
