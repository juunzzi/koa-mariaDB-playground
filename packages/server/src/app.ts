import Koa from 'koa';

import logger from 'koa-logger';

const app = new Koa();

app.use(logger());

app.use(async (ctx) => {
  ctx.body = '준찌보';
});

app.listen(3000);
