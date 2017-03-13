const ob = require('express');
router = ob.Router();
module.exports = router;

mainController = require('./controllers/main.controller');

router.use(mainController.showHome);