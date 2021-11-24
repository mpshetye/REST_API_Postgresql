const router = require("express").Router();
const userController = require('../controller/userController');


router.get("/users", userController.user_get);
router.post("/add", userController.user_post);
router.patch("/update", userController.user_patch);
router.delete("/delete", userController.user_delete);


module.exports = router;