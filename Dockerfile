FROM alpine:node
WORKDIR /app
COPY package*.json /app/
RUN npm install --save react-router-dom react-mdl react
COPY ./ /app/
CMD [ "sleep", "5"]