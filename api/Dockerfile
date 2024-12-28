FROM node:18

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]