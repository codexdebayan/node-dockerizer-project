FROM node:latest
WORKDIR /apps
COPY package.json .
ADD . .
EXPOSE 4200
RUN npm install
CMD ["node", "index.js"]
