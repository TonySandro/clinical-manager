FROM node:20-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN apk update && apk upgrade --no-cache && npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
