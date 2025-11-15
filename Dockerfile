# Stage 1: Build the Vite app
FROM node:22-alpine AS build
WORKDIR /app
# Accept build-time variables from Dokploy
ARG VITE_API_URL
ARG VITE_RAZORPAY_KEY_ID

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_RAZORPAY_KEY_ID=$VITE_RAZORPAY_KEY_ID

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
Stage 1: Build Vite app
