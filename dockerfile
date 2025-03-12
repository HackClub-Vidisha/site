FROM node:23-alpine

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]
