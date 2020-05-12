const { Router } = require("express");
const { auth, db } = require("./../firebase");

const router = new Router();

router.get("/:id", async (req, res) => {
  let docs = [];
  let snapShot = await db.collection("hamsters").doc(req.params.id).get();
  snapShot.forEach((doc) => {
    docs.push(doc.data());
  });

  res.send({ hamsters: docs });
});

module.exports = router;
