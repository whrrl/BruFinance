const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5055;

app.use(cors());
// app.use(express.static(path.join(__dirname)));
// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     }),
// );

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => {
    console.log("Server started on port " + port);
});