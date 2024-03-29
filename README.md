# Desafío - Abracadabra

Servidor con Express JS que sirve como sitio web estático
con temática de magia.

## Descripción

En este desafío, deberé desarrollar un servidor con Express que sirva un sitio web estático con temática de magia, donde se presenten 4 sombreros y al hacer click en uno de estos
encontrar(_random_) el conejo oculto.

## Rutas del Servidor

1. **/abracadabra/usuarios:** Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.

2. **/abracadabra/juego/:usuario:** A través de un middleware, verificar que el usuario escrito como parámetro existe en el arreglo alojado en el servidor.

3. **/abracadabra/conejo/:n:** Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir con el número recibido como parámetro ó devolver la foto de Voldemort en caso de no coincidir.

## Requerimientos

1. Crear un servidor con Express en el puerto 3000. **(2 Puntos)**

2. Definir la carpeta “assets” como carpeta pública del servidor. **(1 Punto)**

3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta **/abracadabra/usuarios**. **(2 Puntos)**
4. Crear un middleware con la ruta **/abracadabra/juego/:usuario** para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor.
   En caso de ser exitoso, permitir el paso a la ruta **GET** correspondiente, de lo contrario devolver la imagen “who.jpeg”. **(2 Puntos)**

5. Crear una ruta **/abracadabra/conejo/:n** que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
   En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort. **(2 Puntos)**

6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor. **(1 Punto)**

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

```bash
git git@github.com:Percy-182/desafio_Abracadabra_M6D2.git
```

### Pre-requisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo **(Ubuntu 20**.04, Windows 10, MacOS 10.15)
- Navegador (Firefox, Opera, Chrome, Brave, Safari)
