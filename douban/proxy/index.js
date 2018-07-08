const koa = require("koa2");
const request = require("superagent");
const router = require("koa-router")();

const app = new koa();
const HOST = "http://api.douban.com/v2";

app.use(async (ctx, next) => {
  if (!ctx.get("Origin")) return await next();
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "GET");
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  if (ctx.method === "OPTIONS") {
    return ctx.send(200);
  }
  await next();
});

let requestList = [
  "/movie/:type",
  "/movie/subject/:id",
  "/movie/subject/:id/reviews",
  "/movie/subject/:id/comments",
  "/movie/celebrity/:id"
];

requestList.forEach(item => {
  router.get(item, async (ctx, next) => {
    const sreq = request.get(HOST + ctx.originalUrl);
    sreq.pipe(ctx); //请求
    sreq.on("end", (err, res) => {
      console.log(`>>> 拉取${item}成功！！！`);
    });
  });
});

app.use(router.routes(), router.allowedMethods());

app.listen(8888, () => {
  console.log("success!!! port 8888");
});
