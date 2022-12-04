const { Router } = require("express");
router = Router();

const serverServices = require('../services/serverServices');

router.get('/', async (req, res) => {


    try {
        let data = "Home page";
        res.status(200).json(data);

    } catch (err) {
        res.status(401).json({ message: err });
    }
})

module.exports = router;