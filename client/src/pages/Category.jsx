import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoryName from "../elements/CategoryName";
import Product from "../elements/Product";
import { getCategoryData } from "../store/actions/categoryData.action";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.category);
  const categoryData = categories[categoryId];

  useEffect(() => {
    if (!categoryData) {
      dispatch(getCategoryData(categoryId));
    }
  }, [categoryId]);

  return (
    <div className="text-white">
      <CategoryName name={categoryData?.title} />

      <div className="flex justify-center">
        {categoryData?.products?.map((data) => (
          <Product
            _id={data._id}
            key={data._id}
            id={data.key}
            src={data.urlImg}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
