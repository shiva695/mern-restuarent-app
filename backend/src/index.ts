import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const port = 7000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server running in port ${port} successfully`);
});
