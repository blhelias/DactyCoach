FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install

COPY jsconfig.json jsconfig.json
COPY /src src
COPY /public public

EXPOSE 3000

ENV PORT=3000
ENV HOST=0.0.0.0

CMD npm start
