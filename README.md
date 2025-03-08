# Juego del Ahorcado

Este es un juego clásico del Ahorcado desarrollado en un proyecto base de React Native utilizando TypeScript.

## Características

### Pantalla de Inicio
Contiene una imagen representativa del juego y un botón para comenzar una nueva partida.

### Pantalla de Juego

Muestra la palabra oculta que se va revelando a medida que el jugador adivina correctamente.

Para ello, hay un teclado interactivo para seleccionar letras que se colorea según si están en la palabra o no.

Alternativamente hay un campo de texto para escribir las letras manualmente.


## Explicación del código

En primer lugar, la pantalla de inicio (HomeScreen) usa React Navigation para llevar a la pantalla de juego (Juego) mediante un botón.

Una vez se decida iniciar una nueva partida, se hace un fetch a una API de palabras aleatorias para obtener la palabra a adivinar y se pone en mayúsculas.

Dicha palabra se ocultará transformándose en guiones. Cuando una letra incluida en la palabra es seleccionada, entrará al array de letras actuales y se recorrerá la palabra, sustituyendo en los huecos correspondientes. En caso de que no, se añadirá al array de letras incorrectas.

Tanto si la letra seleccionada está en la palabra o no, entrará al array de letras adivinadas y se cambiará de color en el teclado según sea activa (verde) o inactiva (rojo). Para comprobar si está, simplemente se filtrará según si la palabra la incluye o no.

Para generar el teclado, se recorre un array con todas las letras del abecedario inglés y se van creando TouchableOpacity para cada una.

Se dará un total de 5 intentos para adivinar la palabra. Tanto si se acierta como si no, se deshabilitarán las teclas recorriendo una vez más el teclado y se revelará un texto de victoria o fracaso según lo ocurrido. Por último, se mostrará la palabra completa si no se acertó.

Para reiniciar el juego, basta con retroceder a la pantalla de inicio y pulsar de nuevo el botón de iniciar partida.


## Objetivos conseguidos

### Creación de Componentes Adaptados a la Aplicación
Se han implementado componentes reutilizables y modulares adaptados a los requerimientos específicos de la aplicación.

### Diseño del Menú y Gestión entre Pantallas
Se ha creado un menú intuitivo y funcional con navegación fluida entre pantallas.

### Uso de Datos Externos
Se integran correctamente datos externos en la aplicación (fetch de la palabra aleatoria) con un manejo eficiente de la asincronía y errores en la carga de datos.

### Creación de Componentes Dinámicos
Se han implementado componentes que se adapten a los datos recibidos (ocultación y revelación gradual de la palabra).

También hay una correcta actualización de los componentes al recibir nueva información (teclado interactivo que cambia de color según si se encuentra la letra en la palabra).

### Uso de Contextos Definidos
Se aplican de los contextos desarrollados en el curso implementando adecuadamente proveedores y consumidores de contexto (estados del estado de adivinación de la palabra y letras usadas).

### Kotlin

No se ha realizado adaptación a Kotlin de esta aplicación.
## Instalación

Clona el repositorio:

```bash
git clone https://github.com/BGarciaQuesada/Ahorcado.git
cd ahorcado
```

Instala las dependencias:
```bash
npm install
```

o si usas Yarn:
```bash
yarn install
```
Inicia la aplicación en un dispositivo o emulador:
```bash
npx react-native run-android   # Para Android
npx react-native run-ios       # Para iOS (requiere macOS)
```    
