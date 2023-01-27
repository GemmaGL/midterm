/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
/*hay que cambiar titulo project y project info que no se como se llaman en el index*/

let s3 = document.querySelectorAll(".text-box h3");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < s3.length; i++) {
      s3[i].innerText = data[i].title;
      console.log(s3);
    }
  });
