import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PreviewProduct from "../../elements/PreviewProduct";
import { getPreviewProductData } from "../../store/actions/previewProductData.action";

const ModalPreviewProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { productId } = useParams();
  const dispatch = useDispatch();
  const previewProd = useSelector((state) => state.previewProduct);

  const previewProductData = previewProd[productId];
  console.log(previewProductData);

  useEffect(() => {
    if (!previewProductData) {
      dispatch(getPreviewProductData(productId));
    }
  }, [productId]);

  if (!previewProductData) {
    return null;
  }

  const onClose = () => {
    navigate(location.state?.backgroundLocation || "/");
  };

  return ReactDom.createPortal(
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-90"
        onClick={onClose}
      />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <PreviewProduct
          key={previewProductData.key}
          {...previewProductData}
          onClose={onClose}
        />
      </div>
    </>,
    container
  );
};

const container = document.getElementById("portal");

export default ModalPreviewProduct;
