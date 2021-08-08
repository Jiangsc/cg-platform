'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postProducts = postProducts;
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.putProducts = putProducts;
exports.deleteProduct = deleteProduct;

var _Product = require('../models/Product');

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postProducts(req, res) {
  var product = new _Product2.default(req.body);
  product.save(function (err) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    }
    res.json({
      success: true
    });
  });
}

function getProducts(req, res) {
  _Product2.default.find(function (err, docs) {
    return res.json(docs);
  });
}

function getProduct(req, res) {
  var name = req.params.name;
  _Product2.default.findOne({ name: name }, function (err, doc) {
    res.json(doc);
  });
}

function putProducts(req, res) {
  var product = new _Product2.default(req.body);
  _Product2.default.findOneAndUpdate({ name: product.name }, product, function (err) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    }
    res.json({
      success: true
    });
  });
}

function deleteProduct(req, res) {
  var name = req.params.name;
  _Product2.default.remove({ name: name }, function (err) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    }
    res.json({
      success: true
    });
  });
}