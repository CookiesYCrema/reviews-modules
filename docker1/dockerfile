FROM node:8

WORKDIR /reviews-modules
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3010

CMD [ "npm", "start" ]