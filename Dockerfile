FROM node:20.14.0-slim

RUN apt update && apt install -y procps

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]

