const express = require("express");
const app = express();
const Home = require("./new/new")

app.use(express.static("image"))

app.get("/", (req, res) => {
    console.log("Got a GET Request at /")
    res.send(`
        <h1>Front</h1>
        <img src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="Shapes" heigth = >
    `);
})
app.use("/", Home);

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

