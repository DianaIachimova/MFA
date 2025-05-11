FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN yarn install
COPY . .
CMD ["yarn", "start"]
