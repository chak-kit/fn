import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Categories-carousel.css";
import withStoreService from "../hoc";
import connect from "react-redux/es/connect/connect";
import { filterAddBrand, productsLoaded } from "../../actions";


const CategoriesCarousel = ({ storeService, catalog, brand, products }) => {
  const [getBrands, setBrands] = useState([]);
  const [getProd, setProd] = useState([])

  useEffect(() => {
    storeService
      .getAllBrands()
      .then((response) => setBrands(response))
      .catch((err) => console.log(err));
  }, [storeService]);

  useEffect(() => {
    storeService
      .getProductsForEachBrand(catalog)
      .then((res) => {
        setProd(res.products);
        console.log(res.products);
      });

  }, [
    brand,
    // storeService,
    productsLoaded,
    products,
    catalog
  ]);

  console.log(products);

  return (
    <Carousel >
      {getProd.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={`/images/products/${item.images[0]}`}/>
          <Carousel.Caption><h3>{item.brand}</h3></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
};

const mapStateToProps = ({
                           productsList: { currentPage, products },
                           filter: { brand }
                         }) => ({ brand });

const mapDispatchToProps = (dispatch) => ({
  filterAddBrand: (brand) => dispatch(filterAddBrand(brand)),
  productsLoaded: (products) => dispatch(productsLoaded(products))
});

export default withStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(CategoriesCarousel)
);
