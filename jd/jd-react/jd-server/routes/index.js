const router = require("koa-router")();
const { swiper, otherapp, like, spike, more } = require("./data");

router.get("/data/swiper", swiper);

router.get("/data/otherapp", otherapp);

router.get("/data/spike", spike);

router.get("/data/more", more);

router.get("/data/like", like);

module.exports = router;
