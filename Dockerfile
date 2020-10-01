FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install react-router-dom react-mdl

COPY . .

CMD ["npm", "start"]
