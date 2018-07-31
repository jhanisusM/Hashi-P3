const router = require("express").Router();
const horsesController = require("../../controllers/horsesControllers");

// Matches with "/api/books"
router.route("/")
  .get(horsesController.findAll)
  .post(horsesController.create);

// Matches with "/api/horses/:id"
router
  .route("/:id")
  .get(horsesController.findById)
  .put(horsesController.update)
  .delete(horsesController.remove);

module.exports = router;
