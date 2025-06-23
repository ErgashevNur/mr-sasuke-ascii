const express = require("express");
const figlet = require("figlet");

const app = express();
const port = 3000;

// Hacked banner
const hackedBanner = `
 ███╗   ███╗███████╗     ███████╗  █████╗ ███████╗██╗   ██╗██╗  ██╗███████╗
 ████╗ ████║██╔════╝     ██╔════╝ ██╔══██╗██╔════╝██║   ██║██║ ██╔╝██╔════╝
 ██╔████╔██║█████╗       ███████╗ ███████║███████╗██║   ██║█████╔╝ █████╗  
 ██║╚██╔╝██║██╔══╝       ╚════██║ ██╔══██║╚════██║██║   ██║██╔═██╗ ██╔══╝  
 ██║ ╚═╝ ██║███████╗     ███████║ ██║  ██║███████║╚██████╔╝██║  ██╗███████╗
 ╚═╝     ╚═╝╚══════╝     ╚══════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
             M R .  C O D E N U R   H A C K E D !
`;

app.get("/", (req, res) => {
  res
    .type("text/plain")
    .send(
      "Salom, bu Mr. Sasuke ASCII serverining bosh sahifasi.\n" +
        "Quyidagi yo‘llarni sinab ko‘ring:\n" +
        "/hacked\n/sasuke\n/skull\n/matrix\n/ascii/Sasuke"
    );
});

app.get("/hacked", (req, res) => {
  res.type("text/plain").send(hackedBanner);
});

app.get("/sasuke", (req, res) => {
  figlet.text("SASUKE", { font: "Standard" }, (err, data) => {
    if (err) return res.status(500).send("Figlet error");
    res.type("text/plain").send(data);
  });
});

app.get("/matrix", (req, res) => {
  res
    .type("text/plain")
    .send(
      `010101010101010101010101010101\n101010101010101010101010101010\n010101010101010101010101010101\n101010101010101010101010101010`
    );
});

app.get("/skull", (req, res) => {
  res.type("text/plain").send(`
      _____
     /     \\
    | () () |
     \\  ^  /
      |||||
      |||||
  `);
});

app.get("/ascii/:text", (req, res) => {
  const input = req.params.text;

  figlet.text(input, { font: "Standard" }, (err, data) => {
    if (err) return res.status(500).send("ASCII generation error");
    res.type("text/plain").send(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
