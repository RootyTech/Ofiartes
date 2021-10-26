# Ofiartes

## Documentación 📚

### 📂 Estructura de carpetas
| 📁public
|	- 📙 index.html
| 📁src
|	- 📁assets
|	-	- 🖼 Imágenes (.png | .svg | .webp | .jpg)
|	- 📁components
|	-	- 🧩 Componentes (.js | .jsx)
|	- 📁lib
|	-	- 🟨 Funciones reutilizables (.js)
|	- 📁pages
|	-	- 🖥 Páginas (.js | .jsx)
|	- 🟨 App.js
|	- 🟨 client.js
|	- 🟨 context.js
|	- 🟨 client.js
|	- 🟪 global.sass
|	- 🟨 index.js
| ⚙ .babelrc
| ⚙ .env
| ⚙ .gitignore
| 📦 package-lock.json
| 📦 package.json
| 📄 README.md
| 📦 webpack.config.js

### $ Variables
> Todas las variables están en el archivo [global.sass](https://github.com/JuanesGalvis/Ofiartes/blob/master/src/global.sass "global.sass")

````sass
/* ==== Colores ==== */  
$verde: #5CE6A8
$amarillo: #F9E26E
$rojo: #FF6565
$azul: #37BCFF
$negro_oscuro: #2C2C2C
$blanco: #F3F5F6
$gris_negro: #414141
$gris_oscuro: #505050
$gris_claro: #A6A8A9
$gris_blanco: #D6DADB

/* ==== Tipografías ==== */

$principal: 'Merriweather', serif
$secundaria: 'Open Sans', sans-serif
````
#### 📘 Orden de las propiedades CSS:
- Composición (`position, float, clear, display`)
- Modelo de caja (`width, height, margin, padding`)
- Propiedades `visuales (color, background, border, box-shadow`)
- Tipografía (`font-size, font-family, text-align, text-transform`)
- Miscelánea (`cursor, overflow, z-index`)

#### Metodología de clases: BEM
> Bloque__Elemento--modificador

## 💻 Comandos para utilizarlo
1. `npm run dev` -> Compilación y servidor con Webpack
2. `npm build` -> Compilación para producción

### 🔐 Variables de entorno
> Para utilizar el proyecto es necesario contar con las siguientes variables de entorno:

````env
CONTENFUL_SPACE=
CONTENFUL_TOKEN=
````

## 👥 Colaboradores:
- [Daniela Jurado Blandón](https://github.com/dionej11 "Daniela Jurado Blandón")
- [Santiago Restrepo Idárraga](https://github.com/Santiago-Restrepo "Santiago Restrepo Idárraga")
- [Miguel Ángel Bedoya Bonilla](https://github.com/MiguelABoni "Miguel Ángel Bedoya Bonilla")
- [Juan Esteban Galvis](https://github.com/JuanesGalvis "Juan Esteban Galvis")
- [Isabela Ceballos Franco](https://github.com/IsabelaCeballos "Isabela Ceballos Franco")