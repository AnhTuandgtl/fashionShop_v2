import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userLoginReducer } from './Reducers/userReducers';
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from './Reducers/ProductReducers';
import {
  orderCancelReducer,
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
  orderUpdateStatusReducer,
  orderPreviewReducer,
  billOfLandingReducer,
  updateCODReducer,
} from './Reducers/OrderReducres';
import { sliderCreateReducer, sliderDeleteReducer, sliderListReducer } from './Reducers/SliderListReducers';
import {
  categoryAddReducer,
  categoryChildrenReducer,
  categoryDeleteReducer,
  categoryListReducer,
  categoryUpdateReducer,
} from './Reducers/CategoryReducers';
import { voucherReducer } from './Reducers/VoucherReducers';
import { summaryReducer } from './Reducers/SummaryReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
  orderUpdateStatus: orderUpdateStatusReducer,
  orderCancel: orderCancelReducer,
  orderPreview: orderPreviewReducer,
  billOfLanding: billOfLandingReducer,
  updateCOD: updateCODReducer,

  sliderList: sliderListReducer,
  deleteSlider: sliderDeleteReducer,
  sliderCreate: sliderCreateReducer,
  CategoryList: categoryListReducer,
  CategoryChildren: categoryChildrenReducer,
  CategoryDelete: categoryDeleteReducer,
  CategoryAdd: categoryAddReducer,
  CategoryUpdate: categoryUpdateReducer,

  Voucher: voucherReducer,

  summary: summaryReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
