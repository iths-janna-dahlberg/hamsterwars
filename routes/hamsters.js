const { db } = require("./../firebase");
const { Router } = require("express");

const router = new Router();

//GET all Hamsters

router.get("/", async (req, res) => {

  let hamsters = [];

  let snapShot = await db.collection("hamsters").get();

  snapShot.forEach(doc => {
    hamsters.push(doc.data());
  });

  res.send({ hamsters: hamsters });
});


// GET hamster by id

router.get("/:id", async (req, res) => {

  let id = req.params.id;

  let snapShot = await db.collection("hamsters").doc(req.params.id).get();
  snapShot.forEach(doc => {
    hamsters.push(doc.data());
  });

  res.send({ hamster: id })

});

// Update hamster with ID :id with new results

router.put("/:id/results", async (req, res) => {

  try {

    let snapShot = await db.collection("hamsters").where("id", "==", req.params.id).get();
    snapShot.forEach(doc => {

      let hamster = doc.data();

      hamster.wins += (req.body.wins * 1);
      hamster.defeats += (req.body.wins * 1);
      hamster.games += (req.body.wins * 1);

      db.collection("hamsters").doc(doc.id).set(hamster)
        .then(res.send({ msg: "Hamster result updated." }))
        .catch(err => console.error(err))
    })
  }

  catch (err) {
    console.error(err);

  }
})
module.exports = router;
