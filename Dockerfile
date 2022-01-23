FROM node:16
WORKDIR /myapp3
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3002
CMD ["npm" , "run" ,"dev"]

