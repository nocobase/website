FROM node:alpine

ENV SITE_APPDIR /site
ENV SITE_PORT 4321

RUN npm config set registry https://registry.npmmirror.com/

COPY ./public $SITE_APPDIR/public
COPY ./src $SITE_APPDIR/src
COPY ./astro.config.mjs $SITE_APPDIR/astro.config.mjs
COPY ./tsconfig.json $SITE_APPDIR/tsconfig.json
COPY ./package.json $SITE_APPDIR/package.json

RUN cd $SITE_APPDIR && yarn install && yarn astro build

EXPOSE $SITE_PORT

WORKDIR $SITE_APPDIR

CMD ["node", "./dist/server/entry.mjs"]
