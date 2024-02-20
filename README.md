Bienvenido a mi primer proyecto con Javascript: un juego de piedra, papel o tijera.

Se presentará en una página web en HTML cuya base será el archivo index.html y estilizada con flexbox CSS en el fichero style.css, el código será realizado con Javascript en el fichero script.js.

el Pseudocódigo (1ª versión) será el siguiente:
en primera instancia sólo podrá ser visualizado a través de la consola de Javascript

-Saludar al usuario, preguntar nombre de usuario y guardarlo en una variable.
-Crear una variable que represente la puntuación, cuyo valor inicial sea 0
-Crear una variable que represente los intentos, cuyo valor inicial sea 0.
-Crear tres variables de opciones: piedra, papel y tijera
-Solicitar al usuario la elección de una de las tres variables
    - si el usuario no elige una de las tres variables, mostrar un mensaje de error y ordenar la elección de la variable nuevamente
    - si vuelve a elegir mal, mostrar otro mensaje, volver a ordenar la elección de variable y restar un punto de la puntuación.
-La Máquina elige una de las tres variables al azar
-Comparar la variable elegida por el usuario con la seleccionada por la Máquina:
    - Si la variable es igual, indicar empate y no sumar ni restar puntos
    - Si el usuario eligió Papel:
        -Si la Máquina eligió piedra: Victoria, sumar un punto a puntuación-usuario
        -si la Máquina eligió tijera: Derrota, restar un punto a puntuación-usuario
        -Si la Máquina eligió Papel: Empate.
    -Si el usuario eligió Piedra:
        -Si la Máquina eligió piedra: Empate
        -si la Máquina eligió tijera: Victoria, sumar un punto a puntuación-usuario
        -Si la Máquina eligió Papel: Derrota, restar un punto a puntuación-usuario.
    -Si el usuario eligió Tijera:
        -Si la Máquina eligió piedra: Empate
        -si la Máquina eligió tijera: Victoria, sumar un punto a puntuación-usuario
        -Si la Máquina eligió Papel: Derrota, restar un punto a puntuación-usuario.
-si la comparación resulta en Victoria, mostrar mensaje de victoria y puntaje
-si la comparación resulta en derrota, mostrar mensaje de derrota y puntaje
-si la comparación resulta en empate, mostrar mensaje de empate y puntaje
- sumar uno a la variable intentos
- si la variable intentos es menor a 10, repetir la secuencia
- si la variable intentos es igual o mayor a 10, terminar el programa, felicitar e informar el puntaje.