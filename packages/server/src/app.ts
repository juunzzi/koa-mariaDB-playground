import { number_1 } from '@/ex';
import Koa from 'koa';

import logger from 'koa-logger';

const app = new Koa();

app.use(logger());

app.use(async (ctx) => {
  ctx.body = '준찌보';

  console.log(number_1);
  console.log('hi');
});

app.listen(3000);
