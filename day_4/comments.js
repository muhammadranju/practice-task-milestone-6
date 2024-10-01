const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
// lowComments();

const comments = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// comments();

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);
