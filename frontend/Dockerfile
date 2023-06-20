FROM node:18.16.0-alpine3.18

WORKDIR  /app

RUN npm install @vue/cli

RUN apk update && apk upgrade
RUN apk add git

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .