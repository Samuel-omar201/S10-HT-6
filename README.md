
//// Descripción

API para crear, actualizar, eliminar y listar usuarios.
NOTA: Por motivos de persistencia de datos en diferentes ambientes se agrego un archivo .json para guardar la información

// Instrucciones para ejecucion local

- Clonar repositorio.
- Ejecuta `npm install` para instalar las dependencias.
- Ejecuta `node server.js` para iniciar el servidor.
- Acceder a `http://localhost:3000/users` para interactuar con la API.

// URL de la API desplegada



\\\ Endpoints

/// POST /users
Crea un nuevo usuario.
Ejemplo 1 creacion de usuario:
POST
http://localhost:3000/users
{
  "name": "Sam",
  "email": "test@demo.com",
  "password": "1234",
  "dpi": "3004234560101"
}

Respuesta:
{
    "name": "Sam",
    "email": "test@demo.com",
    "password": "1234",
    "dpi": "3004234560101"
}


Ejemplo 2 creacion de usuario que ya existente :
POST
http://localhost:3000/users
{
  "name": "Sam",
  "email": "test@demo.com",
  "password": "1234",
  "dpi": "3004234560101"
}
Respuesta:
{
    "error": "DPI ya registrado"
}

--------------------------------------------------------------------------------------------


//DELETE 

Ejemplo 1 eliminar usuario existente :
DELETE
http://localhost:3000/users/3004234560102
RESPUESTA:
{
    
}
//NOTA: DEBE SER CREADO ANTERIORMENTE

Ejemplo 2 eliminar usuario no existente :
DELETE
http://localhost:3000/users/3004234560103

RESPUESTA:
{
    "error": "Usuario no encontrado"
}



--------------------------------------------------------------------------------------------


//GET 

EJEMPLO: Listar todos los usuarios
http://localhost:3000/users/

[
    {
        "name": "Sam",
        "email": "test@demo.com",
        "password": "1234",
        "dpi": "3004234560101"
    },
    {
        "name": "Sam",
        "email": "test@demo.com",
        "password": "1234",
        "dpi": "3004234560102"
    },
    {
        "name": "Sam",
        "email": "test@demo.com",
        "password": "1234",
        "dpi": "3004234560103"
    }
]
