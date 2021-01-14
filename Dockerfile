FROM node:15.5-buster

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY ./public ./public

CMD npm run start
