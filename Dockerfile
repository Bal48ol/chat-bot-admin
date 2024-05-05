FROM node:18-alpine3.19 AS build
WORKDIR /app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]
FROM nginx:latest AS runtime
COPY --from=build /app/dist /usr/share/nginx/html