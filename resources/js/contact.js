console.log("¨Hola Gemma y Xavi");

// CLASS REFERENCE

// Ejemplo 004 - Metodo : "POST" - empujando info a  una external PUBLIC API - jsonplaceholder

let addPost = (e) => {
  // Verificacion y "refrescar" conceptos de semana pasada
  e.preventDefault();
  console.log(e);
  console.log("CTA Connected");
  // Vamos a traernos el valor de los inputs del html
  let titleOfUserInput = document.querySelector("#title").value;
  let bodyOfUserInput = document.querySelector("#body").value;
  // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titleOfUserInput,
      body: bodyOfUserInput,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// Ejemplo 003 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
//document.querySelector("#addPost").addEventListener("submit", addPost);

// MY COOL CODE

let midTermContact = (parametroDeEvento) => {
  // parametroDeEvento === info acerca del evento, enste caso es un evento tipo click que asociamos mediante DOM selection al boton llamado id="¨submitbut"
  console.log(parametroDeEvento);
  console.log("clicked me");

  // pasamaos metodo para prevenir que se auto-load la pantalla y controlamos mas el behaviour del form
  parametroDeEvento.preventDefault();
  // Vamos a traernos el valor de los inputs del html
  let nameContact = document.querySelector("#user-name").value;
  let phoneContact = document.querySelector("#phone").value;
  let emailContact = document.querySelector("#email").value;
  let messageContact = document.querySelector("#comentarios").value;
  // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({
      name: nameContact,
      email: emailContact,
      phone: phoneContact,
      body: messageContact,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // limpiar valores de inputs
      //   nameContact.value = "";
      //   emailContact.value = "";
      //   messageContact.value = "";
      console.log(json);
    })
    .catch((error) => error);
  document.querySelector("#formularioint").reset();
};

document
  .querySelector("#formularioint")
  .addEventListener("submit", midTermContact);
