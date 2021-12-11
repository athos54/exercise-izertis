FROM node:16 AS builder
COPY ./front /app
WORKDIR /app
RUN npm i
RUN npm run build

FROM nginx:1.21.4-alpine
COPY ./conf.d/nginx/ /etc/nginx/
COPY --from=builder /app/dist/izertis/ /var/www/html/
CMD ["nginx", "-g", "daemon off;"]