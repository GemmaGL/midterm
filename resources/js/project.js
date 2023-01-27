/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */
let h1 = document.querySelector(".tituloproject");
let p = document.querySelector(".projectinfo p");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    h1.innerText = data[0].title;
    console.log(h1);
    p.innerText = data[0].body;
    console.log(p);
  });

/* let s1 = document.querySelector(".text1");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    s1.innerText = data[0].title;
    console.log(s1);
  });

let s2 = document.querySelector(".text2");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    s2.innerText = data[1].title;
    console.log(s2);
  });

let s3 = document.querySelector(".text3");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    s3.innerText = data[2].title;
    console.log(s3);
  });
 */
let s3 = document.querySelectorAll(".text-box h3");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < s3.length; i++) {
      s3[i].innerText = data[i].title;
      console.log(s3);
    }
  });
