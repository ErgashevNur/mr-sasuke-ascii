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
const figlet = require("figlet");

app.get("/sasuke", (req, res) => {
  figlet.text("SASUKE", { font: "Standard" }, (err, data) => {
    res.type("text").send(data);
  });
});

app.get("/skull", (req, res) => {
  res.type("text").send(`
      _____
     /     \\
    | () () |
     \\  ^  /
      |||||
      |||||
  `);
});

app.get("/matrix", (req, res) => {
  res.type("text").send(`
010101010101010101010101010101
101010101010101010101010101010
010101010101010101010101010101
  `);
});
app.get("/ascii/:text", (req, res) => {
  figlet.text(req.params.text, { font: "Ghost" }, (err, data) => {
    res.type("text").send(data);
  });
});
