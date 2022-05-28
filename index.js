import express from "express";

const app = express();
const PORT = 5000; //TODO: fix for heroku

app.get("/", (req, res) => {
  return res.json({ id: 1, title: "This is a test object" });
});
app.listen(PORT, () => {
  console.log(`Books server running on http://localhost:${PORT}`);
});
