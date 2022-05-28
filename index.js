import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.json(data);
});
app.listen(PORT, () => {
  console.log(`Books server running successfully: http://localhost:${PORT}`);
});
