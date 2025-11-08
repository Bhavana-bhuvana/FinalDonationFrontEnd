# Stage 1: Build Vite app
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve via Nginx
FROM nginx:stable-alpine

# Copy custom Nginx configuration (handles frontend + API proxy)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Vite build output (note: your project uses "build" not "dist")
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


