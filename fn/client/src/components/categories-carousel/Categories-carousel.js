import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Categories-carousel.css";
import withStoreService from "../hoc";
import connect from "react-redux/es/connect/connect";
import { filterAddBrand, productsLoaded } from "../../actions";


const CategoriesCarousel = ({ storeService, catalog, brand, products }) => {
  const [getBrands, setBrands] = useState([]);
  const [getProd, setProd] = useState([]);

  let brands = getBrands.map((item) => item.brand);
  console.log(brands);
  console.log(getBrands);
  console.log( getProd);

  useEffect(() => {
    storeService
      .getAllBrands()
      .then((response) => setBrands(response))
      .catch((err) => console.log(err));
  }, [storeService]);

  useEffect(() => {
    let productsArray = [];
    brands.forEach((item) => {
      storeService
        .getProductsByFilter({ catalog, brand: item, postsPerPage: 1 })
        .then((res) => {
          productsArray.push(res.products[0]);
          console.log(res.products[0]);
        });
      console.log( productsArray)
    });
    setProd(productsArray)
  }, [
    brand,
    // storeService,
    productsLoaded,
    products,
    catalog
  ]);

//   return (
//     <Carousel>
//       {getProd.map((item) => (
//         <Carousel.Item key={item.id}>
//         <Carousel.Caption>
//             <h3>{item.brand[0]}</h3>
//           </Carousel.Caption>
//           <img className="d-block w-100" src={`/images/products/${item.images[0]}`} alt="First slide"/>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

  return (
    <div>
      <ul>
        {getProd.map((item) => (
          <li key={item.id}>
            <div>
              <img src={`/images/products/${item.images[0]}`}/>
              <p> {item.brand}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({
                           productsList: { products },
                           filter: { getBrands }
                         }) => ({ getBrands, products });

const mapDispatchToProps = (dispatch) => ({
  filterAddBrand: (brand) => dispatch(filterAddBrand(brand)),
  productsLoaded: (products) => dispatch(productsLoaded(products))
});

export default withStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(CategoriesCarousel)
);
