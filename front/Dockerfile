FROM node:14-alpine
RUN npm install -g http-server
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist", "-p", "8080" ]