FROM node:latest
WORKDIR /apps
COPY package.json .
ADD . .
EXPOSE 4100
RUN npm install
CMD ["node", "index.js"]
