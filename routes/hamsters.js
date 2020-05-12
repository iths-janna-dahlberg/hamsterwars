const { Router } = require("express");
const router = new Router();
const { data, update } = require("./../db")

router.get('/:id/:name', async (req, res) => {
    let id = req.params.id;
    let name = (req.params.name);
})
