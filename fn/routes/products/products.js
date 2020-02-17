const express = require('express');
const Products = require('../../models/Product');
const ProductPropetries = require('../../models/ProductPropetries');
const { productValidationRules, validate } = require('../../middleware/validator');

const { Catalogs, Categories, Brands, Colors } = ProductPropetries;

const router = express.Router();

router.get('/', async (req, res) => {
    const { query } = req;
    const { catalog, category, color, brand } = query;
    // const filter = {};
    // if (catalog) filter.catalog = { catalog };
    // if (category) filter.category = { category };
    // if (brand) filter.brand = { brand };
    // if (color) filter.color = { color };

    try {
        const products = await Products.find()
            .populate('catalog')
            .populate('category')
            .populate('color')
            .populate('brand');
        if (!products) {
            return res.status(404).send({ message: 'Products not found ' });
        }

        res.status(200).send(products);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.get('/:id', getProduct, (req, res) => {
    console.log(res.product);
    res.status(200).send(res.product);
});

async function getProduct(req, res, next) {
    const { id } = req.params;
    let product;
    try {
        product = await Products.findById(id);
        if (!product) {
            throw { message: 'Can not find product' };
        }
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }

    res.product = product;
    next();
}

router.post('/', async (req, res) => {
    try {
        const requestedCatalog = req.body.catalog;
        const catalog = await Catalogs.findOne(requestedCatalog);
        if (!catalog) throw { message: 'Bad catalog name' };

        const requestedCategory = req.body.category;
        let category = await Categories.findOne(requestedCategory);
        if (!category) {
            category = new Categories({
                category: requestedCategory.category,
            });
            category = await category.save();
        }

        const requestedBrand = req.body.brand;
        let brand = await Brands.findOne(requestedBrand);
        if (!brand) {
            brand = new Brands({
                brand: requestedBrand.brand,
            });
            brand = await brand.save();
        }

        const requestedColor = req.body.color;
        let color = await Colors.findOne(requestedColor);
        if (!color) {
            color = new Colors({
                color: requestedColor.color,
            });
            color = await color.save();
        }

        const product = new Products({
            catalog,
            category,
            brand,
            title: req.body.title,
            description: req.body.description,
            color,
            images: req.body.images,
            propetries: req.body.propetries,
        });

        const newProduct = await product.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

module.exports = router;
