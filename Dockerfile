FROM node:16-alpine

WORKDIR /usr/app

COPY ./package.json /usr/app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]