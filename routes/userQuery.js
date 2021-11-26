const router = require("express").Router();
const userController = require('../controller/userQueryController');


router.get("/users", userController.user_get);
router.post("/add", userController.user_post);
router.patch("/update/:id", userController.user_patch_all);
// router.patch("/update/:id", userController.user_patch);
router.delete("/delete/:id", userController.user_delete);


module.exports = router;