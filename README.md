# Prueba técnica Izertis por Athos Orío

En este documento explico el "porqué" de las decisiones tomadas en la prueba, así como la explicaciones necesarias para una mejor "lectura" de la prueba.

Si es necesario defender la prueba en una video llamada, o hacer un live-coding no hay problema 😊

He creado varias ramas:

- basic-exercise
- with-fastify-backend
- with-graphql

## Rama basic-exercise

En "basic-exercise" he implementado las siguientes funcionalidades:

- Página principal donde solo se muestra el menu.
- Página home, donde se muestra el listado de todos los posts, así como un filtro por el usuario que ha creado cada post. El filtrado, he pensado en hacerlo a través de una núeva llamada a la api, ya que en este tipo de páginas suele haber un páginador, y hacer el filtrado en front, a pesar de ser más rápido, no creo que sea la mejor opción.
- En cada post, hay dos "botones", uno para editar, lo que lleva a la página de editar el post a través de navegación SPA. El otro botón es para eliminar el post, esté, en mi opinión debería tener un modal de confirmación, que no he puesto por tiempo.
- Tanto la página "editar post" como "crear post" montan el mismo componente "app-post-form", el cual delega la acción del boton al padre que instancia el componente. De esta forma podemos re-aprovechar el componente.
- En el formulario de edición/creación se solicitan diversos campos:
  - User id: este campo, en realidad, debería cogerse seguramente mediante algun token de algun tipo de sistema de autenticación como JWT, pero al no haber sistema de login, lo he dejado con un input normal y corriente.
  - Title: un input normal para introducir el título
  - Body: Un wysiwyg con unas cuentas opciones.
- La api que se dió para hacer la prueba, no guarda los datos, asi que para comprobar si las llamadas se hicieron bien (ya que luego no podremos comprobar si los nuevos posts estan en el listado), he añadido un toast que muestre el resultado en la parte inferior derecha.

- Sobre el tema de docker, he creado un dockerfile con dos stages, el primero hace el build del proyecto, haciendo que la "compilación" sea independiente de la plataforma/equipo desde el que se ejecuta. El segundo añade la app generada en el paso anterior, y lo introduce en un contenedor con un nginx, al cual se le añade una configuracion adicional "conf.d" que hace, que cuando estemos en una ruta, si refrescamos la pantalla, no nos de el tipico 404 de las SPA
- Para probar la parte de docker, he creado un docker-compose, para que ejecute el "sistema", así que con un `docker-compose up` todo debería funcionar correctamente. Si se hace algún cambio en el código, deberíamos ejecutar un `docker-compose build` antes.

## Rama related-apis

En esta rama añado lo que se pide en el punto 2 del ejercicio:

- Página de detalle del post
- Mostar los datos del usuario que ha creado el Post
- Mostrar la lista con los comentarios del Post

## Rama fastify