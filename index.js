const express = require("express");
const app = express();
const port = 3000;

const asciiBanner = `
 ███╗   ███╗███████╗     ███████╗ █████╗ ███████╗██╗   ██╗██╗  ██╗███████╗
 ████╗ ████║██╔════╝     ██╔════╝██╔══██╗██╔════╝██║   ██║██║ ██╔╝██╔════╝
 ██╔████╔██║█████╗       █████╗  ███████║███████╗██║   ██║█████╔╝ █████╗  
 ██║╚██╔╝██║██╔══╝       ██╔══╝  ██╔══██║╚════██║██║   ██║██╔═██╗ ██╔══╝  
 ██║ ╚═╝ ██║███████╗     ███████╗██║  ██║███████║╚██████╔╝██║  ██╗███████╗
 ╚═╝     ╚═╝╚══════╝     ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
             M R .  S A S U K E   H A C K E D !
`;

app.get("/hacked", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(asciiBanner);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(
    "Salom, bu Mr. Sasuke ASCII serverining bosh sahifasi. /hacked sahifasiga kiring."
  );
});
