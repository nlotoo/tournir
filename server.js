const express = require("express")();
const app = express;

const PORT = 3000;
router = require('./router');




const expressConfig = require("./config/express");
expressConfig(app);

app.use(router);

express.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`));