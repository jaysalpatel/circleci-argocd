FROM zenika/alpine-node

MAINTAINER Jaysal Patel

WORKDIR /ciconfig

COPY . . 

RUN npm install --save react-mdl react-router-dom 

RUN npm start

EXPOSE 80

CMD [ "sleep", "5"]