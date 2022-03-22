FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder app/dist/think2.0 .

RUN chown nginx:nginx /usr/share/nginx/html/*

ENTRYPOINT ["nginx", "-g", "daemon off;"]