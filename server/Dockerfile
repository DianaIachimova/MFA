FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm install
COPY . .
RUN npm install -g nodemon
EXPOSE 5000
CMD ["npm", "run", "dev"]
