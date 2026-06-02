# Stage 1 — Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

# Stage 2 — Serve with Nginx
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Copy custom nginx config to handle Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]