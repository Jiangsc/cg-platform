'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _product = require('./controllers/product');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// connnect to Mongodb
_mongoose2.default.Promise = global.Promise;
var promise = _mongoose2.default.connect("mongodb://ccgg-prj:ccggsweet123@cluster0-shard-00-00-kptmg.mongodb.net:27017,cluster0-shard-00-01-kptmg.mongodb.net:27017,cluster0-shard-00-02-kptmg.mongodb.net:27017/CCGG-DB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {
    useMongoClient: true
});
promise.then(function () {
    console.log("Mongodb connected!");
});

// app.use(express.static(__dirname + "/public"));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _expressValidator2.default)());

app.get("/products", _product.getProducts);
app.get("/products/:name", _product.getProduct);
app.post("/products", _product.postProducts);
app.put("/products", _product.putProducts);
app.delete("/products/:name", _product.deleteProduct);

app.listen(process.env.port || 8080);
console.log("server started!");