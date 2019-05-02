FROM brainpower/node-cubicle

WORKDIR /root/repo

ADD . ./
RUN yarn
