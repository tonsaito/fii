var dotenv = require('dotenv').config()
var express = require("express");
var config = require("./config");
var api = require("./models/api.js");

var app = exports.app = express();
var port = process.env.PORT || 5000;
router = express.Router()

router.route("/v1/fiis/:codigo").get(api.scrapFii);
app.set('json spaces', 2);
app.use("/api", router);

app.get("/", function(request, response){
    response.json({
             about:"Recupera informações sobre proventos dos fii",
             contact: "https://www.linkedin.com/in/ayrton-saito-a3254114/",
             project: "https://github.com/tonsaito",
             forkedFrom: "https://github.com/riquellopes/fii",
             search: {
                 example: "curl -X GET http://localhost:5000/api/v1/fiis/MFII11"
             }
    });
});

app.listen(port);
