import express ,{ Application, Request, Response } from "express";

const hostname : string = '127.0.0.1'
const port :number = 9999

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Welcome to Express Server" });
});

app.listen(9999, "127.0.0.1", () => {
  console.log(`Server is running on http://${hostname}:${port}`);  
});
