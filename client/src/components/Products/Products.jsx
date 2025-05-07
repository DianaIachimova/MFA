import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CategoryName from "../../elements/CategoryName";
import Product from "../../elements/Product";
import { getProductsData } from "../../store/actions/productsData.action";

function Products() {
  const productsData = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData);
  }, []);

  return (
    <div>
      {productsData?.map((item) => (
        <div key={item.key}>
          <CategoryName name={item.title} />

          <div className="flex justify-center">
            {item.products?.map((data) => (
              <Product
                _id={data._id}
                id={data.key}
                key={data.key}
                src={data.urlImg}
                name={data.name}
                price={data.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
