import express from "express";
import data from "./data.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.json(data);
});
app.listen(PORT, () => {
  console.log(`Books server running successfully: http://localhost:${PORT}`);
});
