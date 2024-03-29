const express = require("express");
const app = express();

//Requerimiento 1 LISTO
app.listen(3000, () => {
  //para informar visualmente por consola el inicio del server
  console.log("El servidor está inicializado en el puerto 3000");
});

//Requerimiento2 LISTO
app.use(express.static("assets"));
//
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Requerimiento3: LISTO
//Ruta 1 Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
const usuarios = [
  "Juan",
  "Jocelyn",
  "Astrid",
  "Maria",
  "Ignacia",
  "Javier",
  "Brian",
];

//http://localhost:3000/

//LISTO
//Ruta 1 Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
app.get("/abracadabra/usuarios", (req, res) => {
  //esto literal muestra por pantalla como obj el arreglo usuarios contenido en const = usuarios
  res.send({ usuarios });
});

//Ruta 2 A través de un middleware, verificar que el usuario escrito como parámetro existe en el arreglo alojado en el servidor

//Requerimiento 4: LISTO
//Middleware
//Paso 1
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  //Paso 2
  //Validaciones
  const Auth = req.header("Authorization");
  console.log(Auth);

  //Paso 3 lo que redirecciona en caso de no recibir la información correcta
  const usuario = req.params.usuario;
  usuarios.includes(usuario) ? next() : res.redirect("/who.jpeg");
});

//Paso 4 Redireccion en caso de el nombre de usuario sea valido.
app.use("/abracadabra/juego/:usuario", (req, res) => {
  const usuario = req.params.usuario;
  usuarios.includes(usuario), res.sendFile(__dirname + "/index.html");
});

//Requerimiento 5: LISTO
//Ruta 3 Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir con el número recibido como parámetro ó devolver la foto de Voldemort en caso de no coincidir.
app.get("/abracadabra/conejo/:n", (req, res) => {
  //n se iguala a Math.random() que genera números en el rango [0, 1), y al multiplicarse por 4 obtenemos un rango de [0, 4). Luego, al aplicar Math.floor(), obtienes números enteros en el rango de 0 a 3, a los cuales luego les sumas 1 para obtener el rango de 1 a 4. Entonces
  const n = Math.floor(Math.random() * 4) + 1;
  const numero = parseInt(req.params.n);
  if (numero === n) {
    res.sendFile(__dirname + "/assets/conejito.jpg");
  } else {
    res.sendFile(__dirname + "/assets/voldemort.jpg");
  }
});

//Requerimiento 6: LISTO ruta generica con msj correspondiente
app.get("*", (req, res) => {
  //
  res.send("Esta página no existe");
});

//GLOSARIO:

//La diferencia en los cierres, es decir, [ y ), en la notación de intervalos se debe a la convención matemática que se utiliza para representar los intervalos.

//El cierre [ indica que el límite está incluido en el intervalo.
//El cierre ) indica que el límite está excluido del intervalo.
