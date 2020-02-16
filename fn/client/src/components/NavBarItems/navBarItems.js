import React, {useState, useEffect} from "react";

export const NavBarItems = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/catalogs/${props.catalogName}`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(response => {
        setProducts(response);
        console.log(response);
      })
      .catch(error => console.log(error));
  }, [props.catalogName]);

  return (
    <div>
      {products.map((c, index) => (
        <div key={index}>
          <div>
            <h3>
              {c.category}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBarItems;