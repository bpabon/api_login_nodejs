
# API de login con Node.js con PostgreSQL y Docker

Este proyecto es una base de inicio para desarrollar aplicaciones en Node.js utilizando PostgreSQL como base de datos y Docker para la gestión de contenedores. La configuración incluye:

- **Swagger**: Documentación de la API para facilitar el entendimiento y consumo de los endpoints.
- **SonarQube**: Análisis estático del código para mantener la calidad y seguridad del proyecto.
- **Pruebas unitarias**: Implementación de pruebas unitarias utilizando un set de datos gestionado a través 

## Características

- **Node.js**: Plataforma de desarrollo en JavaScript del lado del servidor.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.
- **Swagger**: Herramienta para la documentación automática y visualización de la API.
- **SonarQube**: Plataforma para revisar la calidad del código.

## Autor

- [Branm Aldair Pabon Villamizar](https://github.com/bpabon)


## Instalación

Instalación de proyecto con npm 

```bash
  git clone https://github.com/bpabon/api_login_nodejs.git
  cd api_login_nodejs
  npm i
  npm run docker:dev
```
En caso de no correr las migraciones seguir los siguientes pasos Ingresar al contenedor y correr las migraciones manualmente
```bash
  docker exec -it <ID CONTAINER>  /bin/bash
  npm run migrations:run
  npm run seed:all
```
## Requisitos

- Docker
- Node.js
- PostgreSQL
- Npm
## Running Tests

To run tests, run the following command

```bash
    npm run docker:e2e
```
    
## Documentation
```bash
    http://localhost:<port>/api-docs/
```


## 🚀 Acerca de mí
I'm a full stack developer 


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portafilio-person-portafolio3103032-frontend-3eea11f21b7b3a6e28.gitlab.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/branm-aldair-pabon-villamizar-63ab88210)



## License

[MIT](https://choosealicense.com/licenses/mit/)

