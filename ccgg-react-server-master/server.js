import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
import cors from 'cors';

import {postProducts, getProducts, getProduct, putProducts, deleteProduct} from './controllers/product';

const app = express();

// connnect to Mongodb
mongoose.Promise = global.Promise;
const promise = mongoose.connect("mongodb://ccgg-prj:ccggsweet123@cluster0-shard-00-00-kptmg.mongodb.net:27017,cluster0-shard-00-01-kptmg.mongodb.net:27017,cluster0-shard-00-02-kptmg.mongodb.net:27017/CCGG-DB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {
    useMongoClient: true
});
promise.then(function() {
    console.log("Mongodb connected!");
});

// app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

app.get("/products", getProducts);
app.get("/products/:name", getProduct);
app.post("/products", postProducts);
app.put("/products", putProducts);
app.delete("/products/:name", deleteProduct);

app.listen(process.env.port || 8080);
console.log("server started!");
