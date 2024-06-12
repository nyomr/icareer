FROM node:20-alpine3.18 as builder

WORKDIR /app
COPY package.json ./
run npm install --production
COPY . .
RUN npm run builder
EXPOSE 3000
CMD [ "npm","run","start" ]