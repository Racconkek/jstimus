FROM node:15

COPY package.json /
COPY yarn.lock /
COPY index.js /
COPY mainSolution.js /
COPY mainCorrect.js /
COPY code.test.js /
COPY testText.js /

RUN yarn run deps

CMD yarn test
