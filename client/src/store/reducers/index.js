import { combineReducers } from "redux";

import getMenuData from "./menuData.reducer";
import getProductsData from "./productsData.reducer";
import getCategoryData from "./categoryData.reducer";
import getPreviewProductData from "./previewProductData.reducer";
import getSliderTopData from "./sliderTopData.reducer";
import getSliderBottomData from "./sliderBottomData.reducer";
import getFooterData from "./footerData.reducer";
import getNewsData from "./newsData.reducer";
import getOpenNewsData from "./openNewsData.reducer";
import getUserData from "./userData.reducer";
import getCartData from "./cartData.reducer";

const rootReducer = combineReducers({
  menu: getMenuData,
  products: getProductsData,
  category: getCategoryData,
  previewProduct: getPreviewProductData,
  sliderTop: getSliderTopData,
  sliderBottom: getSliderBottomData,
  footer: getFooterData,
  news: getNewsData,
  openNews: getOpenNewsData,
  user: getUserData,
  cart: getCartData,
});

export default rootReducer;
