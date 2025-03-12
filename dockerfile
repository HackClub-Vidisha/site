FROM node:23-alpine

COPY . /app
WORKDIR /app

RUN npm install --legacy-peer-deps

#RUN npm run build
EXPOSE 3000

CMD [ "npm", "run", 'dev' ]
