const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Default route -> serve sorry.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "please.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
