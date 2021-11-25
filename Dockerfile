#FROM node:12.2.0-alpine
FROM node

WORKDIR /app
COPY db.json .
RUN npm install -g json-server
EXPOSE 3000
CMD ["json-server", "db.json"]