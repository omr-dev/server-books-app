import express from "express";
import data from "./data.js";

const app = express();
const PORT = 5000; //TODO: fix for heroku

app.get("/", (req, res) => {
  return res.json(data);
});
app.listen(PORT, () => {
  console.log(`Books server running on http://localhost:${PORT}`);
});
