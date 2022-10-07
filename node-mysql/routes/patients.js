const express = require("express");
const router = express.Router();
const patients = require("../services/patients");

/* GET patients. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await patients.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting patients `, err.message);
    next(err);
  }
});

/* POST patient */
router.post("/", async function (req, res, next) {
  try {
    res.json(await patients.create(req.body));
  } catch (err) {
    console.error(`Error while creating patients`, err.message);
    next(err);
  }
});

/* PUT patient */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await patients.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating patients`, err.message);
    next(err);
  }
});

/* DELETE patient */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await patients.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting patients`, err.message);
    next(err);
  }
});

module.exports = router;
