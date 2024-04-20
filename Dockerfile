FROM node:latest
WORKDIR /apps
COPY package.json .
ADD . .
EXPOSE 2000
RUN npm install
CMD ["node", "index.js"]
