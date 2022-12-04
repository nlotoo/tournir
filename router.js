const { Router } = require("express");
const router = Router();

const Controler = require('./controler/Controler');

router.use('/', Controler);


module.exports = router;