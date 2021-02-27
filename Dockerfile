FROM mhart/alpine-node:14.9.0

WORKDIR /app

EXPOSE 3000

COPY ./package.json /app

RUN yarn install

COPY . /app

CMD yarn start
