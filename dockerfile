FROM node

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["node","server/index.js"]