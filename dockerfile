FROM node:23-alpine

COPY . /app
WORKDIR /app

RUN npm install

#RUN npm run build
EXPOSE 8080

CMD [ "npm", "run", 'dev' ]