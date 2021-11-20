FROM node:14.16
WORKDIR /
COPY . .
RUN npm i
CMD ["npm","run","start"]