# ISUCI Frontend

Este proyecto proporciona la interfaz frontend para la página ISUCI. En pro de generar una solución tecnológica que permita en un solo sistema consolidar información de ciertos equipos de ciclismo.

## Plugins Oficiales

Actualmente, están disponibles dos plugins oficiales para Vite con React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Requisitos

- Node.js v14 o superior

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd tu-repositorio
    ```

3. Instala las dependencias:

    ```sh
    npm install
    ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run serve`: Sirve la versión compilada del proyecto.

## Estructura del Proyecto

```plaintext
tu-repositorio/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
