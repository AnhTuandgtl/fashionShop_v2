import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    productCreateReviewReducer,
    productDetailsReducer,
    productListReducer,
    productListAllReducer,
    similarProductReducer,
} from './Reducers/ProductReducers';
import {
    CartOrderReducer,
    cartReducer,
    CreateCartReducer,
    DeleteCartReducer,
    UpdateCartReducer,
} from './Reducers/CartReducers';
import {
    forgotPasswordReducer,
    resetPasswordReducer,
    shippingAddress,
    // userDetailsReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
} from './Reducers/userReducers';
import {
    orderAddressMyReducer,
    orderCancelReducer,
    orderConfirmPaidReducer,
    orderCreateReducer,
    orderDetailsReducer,
    orderListMyReducer,
    orderPayReducer,
    productBestseller,
} from './Reducers/OrderReducres';
import { Sliderload } from './Reducers/SliderReducer';
import { categoryListReducer } from './Reducers/CategoryReducers';
import { AddressReducer, ShippingFeeReducer } from './Reducers/DeliveryReducers';
import { addVoucher, myVouchers, publicVouchers } from './Reducers/VoucherReducers';

const reducer = combineReducers({
    bestSellerProduct: productBestseller,
    productList: productListReducer,
    productAll: productListAllReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productCreateReviewReducer,
    similarProduct: similarProductReducer,

    cart: cartReducer,
    cartCreate: CreateCartReducer,
    cartDelete: DeleteCartReducer,
    cartUpdate: UpdateCartReducer,
    cartOrder: CartOrderReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    // userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderAddress: orderAddressMyReducer,
    orderPay: orderPayReducer,
    myOrders: orderListMyReducer,
    orderCancel: orderCancelReducer,
    orderConfirmPaid: orderConfirmPaidReducer,
    sliderLoad: Sliderload,
    CategoryList: categoryListReducer,

    address: AddressReducer,
    shippingFee: ShippingFeeReducer,
    shippingAddress: shippingAddress,

    myVouchers: myVouchers,
    publicVouchers: publicVouchers,
    addVoucher: addVoucher,
});

const cartOrderItemsFromLocalStorage = localStorage.getItem('cartOrderItems')
    ? JSON.parse(localStorage.getItem('cartOrderItems'))
    : [];

// login
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

const initialState = {
    cart: {
        cartItems: [],
        shippingAddress: [],
    },
    cartOrder: {
        cartOrderItems: cartOrderItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage,
    },
    userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
