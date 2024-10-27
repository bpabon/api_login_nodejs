#!/bin/bash
# Esperar a que PostgreSQL este disponible
echo "Esperando a que PostgreSQL este disponible..."
/app/wait-for-it.sh postgres_bd:5432 --timeout=60 -- echo "PostgreSQL esta disponible"
# Comando para correr la migracion de la base de datos con sequelize
echo "Ejecutando el comando para crear la migracion"
npm run migrations:run
# Comando para crear los datos en la base de datos
echo "Ejecutando el comando para insertar datos"
npm run seed:all
# Comando para iniciar el proyecto en Node.js
if [ $NODE_ENV  = "dev"  ]; then npm run dev;
elif [ $NODE_ENV  = "e2e"  ]; then npm run e2e;
elif [ $NODE_ENV  = "production"  ]; then npm run start;
fi