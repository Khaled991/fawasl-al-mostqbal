const app = require("express")();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 4000;

app.get("/test", (req, res) => res.send("working"));

http.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
