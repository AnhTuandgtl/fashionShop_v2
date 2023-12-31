import {
  BILL_OF_LANDING_FAIL,
  BILL_OF_LANDING_REQUEST,
  BILL_OF_LANDING_SUCCESS,
  ORDER_CANCEL_FAIL,
  ORDER_CANCEL_REQUEST,
  ORDER_CANCEL_RESET,
  ORDER_CANCEL_SUCCESS,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_RESET,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_PREVIEW_FAIL,
  ORDER_PREVIEW_REQUEST,
  ORDER_PREVIEW_SUCCESS,
  ORDER_UPDATE_STATUS_FAIL,
  ORDER_UPDATE_STATUS_REQUEST,
  ORDER_UPDATE_STATUS_RESET,
  ORDER_UPDATE_STATUS_SUCCESS,
  UPDATE_COD_FAIL,
  UPDATE_COD_REQUEST,
  UPDATE_COD_SUCCESS,
} from '../Constants/OrderConstants';

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// ORDER DETAILS
export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// ORDER DELIVERED
export const orderDeliveredReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVERED_REQUEST:
      return { loading: true };
    case ORDER_DELIVERED_SUCCESS:
      return { loading: false, success: true };
    case ORDER_DELIVERED_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_DELIVERED_RESET:
      return {};
    default:
      return state;
  }
};

export const orderUpdateStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_UPDATE_STATUS_REQUEST:
      return { loading: true };
    case ORDER_UPDATE_STATUS_SUCCESS:
      return { loading: false, success: true };
    case ORDER_UPDATE_STATUS_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_UPDATE_STATUS_RESET:
      return {};
    default:
      return state;
  }
};

export const orderCancelReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CANCEL_REQUEST:
      return { loading: true };
    case ORDER_CANCEL_SUCCESS:
      return { loading: false, success: true };
    case ORDER_CANCEL_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_CANCEL_RESET:
      return {};
    default:
      return state;
  }
};

export const orderPreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PREVIEW_REQUEST:
      return { loading: true };
    case ORDER_PREVIEW_SUCCESS:
      return { loading: false, success: true, preview: action.payload };
    case ORDER_PREVIEW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const billOfLandingReducer = (state = {}, action) => {
  switch (action.type) {
    case BILL_OF_LANDING_REQUEST:
      return { loading: true };
    case BILL_OF_LANDING_SUCCESS:
      return { loading: false, success: true, bill: action.payload };
    case BILL_OF_LANDING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateCODReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COD_REQUEST:
      return { loading: true };
    case UPDATE_COD_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_COD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
