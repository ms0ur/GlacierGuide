# Dockerfile
FROM node:21-alpine3.18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npx nuxi build \
    && rm -fr node_modules

# expose port and define CMD
EXPOSE 3000
EXPOSE 443
EXPOSE 80
CMD [ "node", ".output/server/index.mjs" ]