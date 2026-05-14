# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем проект
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Копируем кастомный конфиг Nginx для поддержки SPA (React)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем билд из предыдущего этапа
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
