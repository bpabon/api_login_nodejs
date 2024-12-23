FROM node:20.16.0

WORKDIR /app
COPY ../../package.json /app
# Instalar las dependencias del proyecto
RUN npm install && \
    apt-get update && \
    apt-get install -y wget && \
    wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x wait-for-it.sh && \
    rm -rf /var/lib/apt/lists/*
COPY . /app
ENTRYPOINT ["/app/wait-for-it.sh", "postgres_bd:5432", "--"]