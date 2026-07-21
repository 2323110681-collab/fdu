# Usa una imagen de Node.js para construir la aplicación
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto del código
COPY . .

# Construye la aplicación
RUN npm run build

# ==========================================
# Segunda etapa: Servir la aplicación
# ==========================================
FROM nginx:alpine

# Copia los archivos construidos a nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia una configuración personalizada de nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
