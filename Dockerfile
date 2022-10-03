FROM node:lts-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --production

COPY ["src", "./src"]

CMD ["yarn", "run", "start"]
