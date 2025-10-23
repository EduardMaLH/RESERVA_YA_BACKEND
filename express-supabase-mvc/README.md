#  MVC

This project is a backend application built with Node.js, Express, and Supabase, following the MVC (Model-View-Controller) architecture. It provides a simple API for managing users.

## Project Structure

- **src/**: Contains the source code for the application.
  - **config/**: Configuration files, including the Supabase connection.
  - **controllers/**: Contains the controllers that handle requests and responses.
  - **models/**: Contains the data models and database queries.
  - **routes/**: Defines the API routes for the application.
  - **middleware/**: Contains middleware functions for authentication and other purposes.
  - **utils/**: Utility functions that can be used throughout the application.
  - **app.js**: The entry point of the application.

backend del proyecto, desarrollado bajo la arquitectura Modelo–Vista–Controlador (MVC) utilizando Node.js y Express.js. El sistema se integra con Supabase como servicio de base de datos y autenticación, gestionando las operaciones CRUD y la lógica de negocio de la aplicación. El proyecto está estructurado para garantizar escalabilidad, modularidad y separación de responsabilidades, facilitando el mantenimiento y la extensión de nuevas funcionalidades.

Características principales:

Conexión a base de datos PostgreSQL mediante Supabase.

Arquitectura MVC (Modelos, Controladores, Rutas y Configuración).

Servidor Express configurado con CORS y dotenv.

Controladores y modelos desacoplados para un flujo de datos limpio.

Preparado para integrarse con un frontend independiente (React, Next.js, etc.).

Compatible con despliegues en Render, Railway, Vercel u otros servicios Node.js.

Tecnologías:

Node.js

Express.js

Supabase (Base de datos y autenticación)

Dotenv

CORS