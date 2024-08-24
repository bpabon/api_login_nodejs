FROM node:20.16.0

WORKDIR /app
COPY package.json /app
# Instalar las dependencias del proyecto
RUN npm install
COPY . /app