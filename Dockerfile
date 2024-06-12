FROM node:20.14.0-alpine3.18 as builder

WORKDIR /app
COPY package.json ./
run npm install --production
COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "npm","run","start" ]