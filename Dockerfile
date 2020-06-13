FROM node:carbon
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Copy package.json
COPY package.json /usr/src/app
#install dependencies
RUN npm install
RUN npm install -g forever
# Bundle app source
COPY . /usr/src/app


#Expose Port
EXPOSE 3002
#Start npm
CMD ["npm", "start"]