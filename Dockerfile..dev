###The build is in two seperate steps
FROM node:alpine as builder


WORKDIR '/app'
# Above we set the build environment as a folder called /app in the docker container to prevent clashes

##to stop repeated npm installs, we copy package.json with all deps over to the /app directory created for the container
COPY package.json .


##installs dependencies to run my website
RUN npm install react-router-dom react-mdl

##this command copies my project to the workdir /app folder in the container
COPY . .

##This command is to run the prod version of this app
RUN npm run build


FROM nginx 

EXPOSE 80 

# Copy the content of the builder step, move the contents of build folder into the html folder in this nginx container
##when the container of an image starts up, nginx service is already up
COPY --from=builder /app/build /usr/share/nginx/html

