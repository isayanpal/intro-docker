const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: " Hello , I m nodejs in container" });
});

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
