FROM node:12-alpine
WORKDIR /api-rest-test
COPY package*.json ./
COPY . .
RUN npm ci --only=production
CMD [ "npm", "start" ]