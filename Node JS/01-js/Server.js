import express from 'express';

const hostName = "127.0.0.1";
const port = 9999;

const app = express();

app.get("/home", (req, res) => {
    res.status(200).json({
        msg: "Welcome to the /home route of the Express Server"
    });
});

app.get("/", (req, res) => {
    res.status(200).send(`<h1 style='color:red '> this is / page </h1>`)
});

app.get("/login", (req, res) => {
    res.status(200).send(`<h1 style='color:red '> This is Login Page </h1>`)
});

app.listen(port,hostName  => {
    console.log(`Express Server is started at http://${hostName}:${port}`);
});
