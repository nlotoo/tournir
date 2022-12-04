

const { Router } = require("express");
router = Router();


async function homePageService() {
     console.log('im  on homepage');
     return 'data from homePageService';

}

module.exports = {
     homePageService,
}