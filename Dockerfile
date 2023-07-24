FROM node:18-alpine

MAINTAINER God Js dev

RUN mkdir /app

COPY backend/package.json /app

WORKDIR /app

RUN npm install --production