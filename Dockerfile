FROM zenika/alpine-node

MAINTAINER Jaysal Patel

WORKDIR /ciconfig
COPY package.json /ciconfig

COPY . . 

RUN npm install --save react-mdl react-router-dom 

RUN npm start

CMD [ "sleep", "5"]