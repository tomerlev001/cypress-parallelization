FROM cypress/base:latest
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV CYPRESS_RECORD_KEY=cd8a27d6-2f14-4f7e-8aa2-2b080a6481f2
EXPOSE 3000
CMD npm run run:all