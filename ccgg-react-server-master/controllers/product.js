import Product from '../models/Product';

export function postProducts(req, res){
  const product = new Product(req.body);
  product.save((err) => {
    if(err) {
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

export function getProducts(req, res){
  Product.find((err, docs) => res.json(docs));
}

export function getProduct(req, res){
  const name = req.params.name;
  Product.findOne({name: name}, (err, doc) => {
    res.json(doc);
  });
}

export function putProducts(req, res){
  const product = new Product(req.body);
  Product.findOneAndUpdate({name: product.name}, product, (err) => {
    if(err) {
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

export function deleteProduct(req, res) {
  const name = req.params.name;
  Product.remove({name: name}, (err) => {
    if(err) {
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