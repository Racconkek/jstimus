FROM node:15

COPY package.json /
COPY yarn.lock /
COPY index.js /
COPY mainSolution.js /

RUN yarn run deps

CMD yarn start
