FROM node:20-alpine
RUN npm install -g http-server
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
##RUN npm i -g dotenv express mongoose vue@2 @vue/cli vue-generate-component 
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["http-server", "dist"]