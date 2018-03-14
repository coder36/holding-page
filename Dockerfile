FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install
EXPOSE 5000
