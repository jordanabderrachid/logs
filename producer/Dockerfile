FROM node:carbon

WORKDIR /producer
ADD index.js .
ADD package.json .
RUN npm install

ENTRYPOINT node index.js