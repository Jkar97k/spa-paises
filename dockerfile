# Usa la imagen oficial de Node.js (versión 22)
FROM node:22.12.0-alpine3.21

# Establece el directorio de trabajo en el contenedor
WORKDIR /app/

# Copia los archivos esenciales del proyecto
COPY package.json package-lock.json angular.json tsconfig.json tsconfig.app.json .editorconfig ./

# Instala Angular CLI globalmente y las dependencias
RUN npm install -g @angular/cli@19.0.6 && npm install

# Copia el código fuente
COPY src/ src/

# Expone el puerto de Angular
EXPOSE 4200

# Inicia Angular en modo desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0"]
