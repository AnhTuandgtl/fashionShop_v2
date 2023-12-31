import {
    ADD_SHIPPING_ADDRESS_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    SHIPPING_ADDRESS_FAIL,
    SHIPPING_ADDRESS_REQUEST,
    SHIPPING_ADDRESS_SUCCESS,
    UPDATE_SHIPPING_ADDRESS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_VERIFY,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
} from '../Constants/UserContants';

// LOGIN
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };

        case USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_DETAILS_SUCCESS:
            return { loading: false, userInfo: { ...state.userInfo, ...action.payload }, success: true };
        case USER_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return { user: {} };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return { loading: true };
        case FORGOT_PASSWORD_SUCCESS:
            return { loading: false, success: true, message: action.payload };
        case FORGOT_PASSWORD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const resetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return { loading: true };
        case RESET_PASSWORD_SUCCESS:
            return { loading: false, message: action.payload };
        case RESET_PASSWORD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_VERIFY:
            return { loading: false };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// USER DETAILS
// export const userDetailsReducer = (state = { user: {} }, action) => {
//     switch (action.type) {
//         case USER_DETAILS_REQUEST:
//             return { ...state, loading: true };
//         case USER_DETAILS_SUCCESS:
//             return { loading: false, user: action.payload, success: true };
//         case USER_DETAILS_FAIL:
//             return { loading: false, error: action.payload };
//         case USER_DETAILS_RESET:
//             return { user: {} };
//         default:
//             return state;
//     }
// };

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: { ...action.payload },
            };
        case USER_UPDATE_PASSWORD_SUCCESS:
            return { loading: false, successPass: true, userInfo: action.payload };
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const shippingAddress = (
    state = {
        listAddress: [],
    },
    action,
) => {
    switch (action.type) {
        case SHIPPING_ADDRESS_REQUEST:
            return { ...state, loading: true };
        case SHIPPING_ADDRESS_SUCCESS:
            return {
                loading: false,
                success: true,
                listAddress: action.payload,
            };
        case SHIPPING_ADDRESS_FAIL:
            return { ...state, loading: false, success: false };
        default:
            return state;
    }
};
