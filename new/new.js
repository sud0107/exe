const express = require("express");
const router = express.Router();

router.use("/home", (req, res) => {
    console.log("Home page")
    res.send(`
        <h1>HomePage</h1>
        <img src="download.jpg" alt="Shapes" >
    `);
})

module.exports = router