# Stage 1: Build dell'applicazione Vue
FROM node:24.14-alpine AS builder

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di configurazione delle dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm ci --only=production

# Copia il resto dei file del progetto
COPY . .

# Esegui il build dell'applicazione
RUN npm run build

# Stage 2: Server Nginx per servire l'applicazione
FROM nginx:1.27-alpine AS production

# Copia la configurazione personalizzata di Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia i file buildati dallo stage precedente
COPY --from=builder /app/dist /usr/share/nginx/html

# Esponi la porta 80
EXPOSE 80

# Comando di avvio di Nginx
CMD ["nginx", "-g", "daemon off;"]

# Healthcheck per verificare lo stato del container
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Metadata del container
LABEL maintainer="Salvatore Murolo <sal.murolo@outlook.it>"
LABEL description="Portfolio CV - Vue 3 + TypeScript + Vite"
LABEL version="1.0.0"
