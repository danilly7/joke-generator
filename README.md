# TYPESCRIPT I API - Joke generator con API
## Descripción del proyecto:

Este proyecto es una aplicación web para una empresa de coaching que muestra chistes aleatorios y permite a los usuarios calificarlos. Además, incluye información meteorológica en tiempo real de Barcelona, proporcionada a través de una API de clima. La aplicación cambia dinámicamente el fondo para cada chiste, haciendo la experiencia más visual y amena. Los datos de calificación de los chistes son registrados y almacenados en un array para un posible análisis futuro.
<br>
<br>

![image](https://github.com/user-attachments/assets/b2bea366-c046-4814-a27f-26be05e7684c)
<br>
<br>

## Estructura principal del proyecto:

La aplicación está organizada en diferentes componentes:
- **HTML**: Estructura principal de la aplicación, organizada en secciones para mostrar el clima, el chiste, y la calificación del chiste.
- **CSS/SCSS**: Estilos personalizados en SCSS, que se compilan a CSS, para dar un diseño único. Incluye responsividad y efectos de transición para mejorar la experiencia del usuario.
- **Typescript**: Lógica de la aplicación que maneja la obtención de chistes, cambio de fondo, calificación de chistes, y muestra de información del clima.
<br>

## Funcionalidades principales

- **Chistes aleatorios**: Obtención de chistes de dos APIs diferentes y visualización en la interfaz.
- **Calificación de chistes**: Los usuarios pueden calificar los chistes usando emoticonos. Las calificaciones son guardadas en un array junto con la fecha y hora de la calificación.
- **Cambio dinámico de fondo**: Cada vez que se muestra un nuevo chiste, el fondo de la aplicación cambia para dar un toque visual único.
- **Información del clima en tiempo real**: Muestra el clima actual en Barcelona mediante emojis que representan diferentes estados del clima.
<br>

## Tecnologias utilizadas en el proyecto

- **HTML**: La estructura principal de la página.
- **Bootstrap**: Esqueleto básico usando propiedades de Bootstrap para lograr un diseño responsivo y fácil de ajustar.
- **SCSS**: Estilos personalizados con SCSS, que permite usar variables y anidamiento para un CSS más organizado.
- **Typescript**: Funcionalidades dinámicas y lógica de la aplicación usando TypeScript, proporcionando una estructura más segura y tipada.
- **API de clima y chistes**: Uso de APIs externas para obtener datos de chistes (Icanhazdadjoke y Chuck Norris) y de clima (Open Meteo).
<br>

## Instalación para ver el proyecto

Para instalar este proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/danilly7/joke-generator.git
   ``` 
   
2. Navega a la carpeta del proyecto:

   ```bash
   cd joke-generator
   ```

3. Abrir el archivo HTML `index.html` y visualizar el proyecto en el navegador de preferencia.
<br>

## Autora

- Danilly Condori Lerpido - [GitHub](https://github.com/danilly7)
