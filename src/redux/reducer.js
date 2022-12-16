import { actionType } from "./type";

const initialState = {
  products: {},
  authenticatedUserDetails: {},
  total: 0,
};
export const CartReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.ADD_TO_CART:
      // return {
      //  ...state,
      //   products: {
      //    ...state.products,
      //     [payload.id]: {
      //      ...state.products[payload.id],
      //       quantity: state.products[payload.id].quantity + 1,
      //     },
      console.log(state.products[payload.id]);
      const products = state.products[payload.id]
        ? {
            ...state.products,
            [payload.id]: {
              ...state.products[payload.id],
              quantity: state.products[payload.id].quantity + payload.quantity,
            },
          }
        : {
            ...state.products,
            [payload.id]: payload,
          };

      return {
        ...state,
        products: products,
        total: state.total + payload.quantity,
      };

    // total: state?.products?.total + payload?.quantity,

    // return {
    //   ...state,
    //   products: state.products?.map((product) =>
    //     product.id === payload.id
    //       ? {
    //           ...product,
    //           selected: true,
    //           quantity: product.quantity + payload?.quantity,
    //         }
    //       : [...state?.products, payload]
    //   ),
    //   // total: state?.products?.total + payload?.quantity,
    // };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.id
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case actionType.ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case actionType.SUB_QUANTITY:
      // return {
      //   ...state,
      //   products: state.products.map((product) =>
      //     product.id === payload?.id
      //       ? {
      //           ...product,
      //           quantity: product.quantity !== 0 ? product.quantity - 1 : 0,
      //         }
      //       : product
      //   ),
      // };

      console.log(state.products[payload.id]);
      const productsId = state.products[payload.id]
        ? {
            ...state.products,
            [payload.id]: {
              ...state.products[payload.id],
              quantity:
                state.products[payload.id].quantity !== 0
                  ? state.products[payload.id].quantity - payload.quantity
                  : (state.products[payload.id].quantity = 0),
            },
          }
        : {
            ...state.products,
            [payload.id]: payload,
          };

      return {
        ...state,
        products: productsId,
        total:
          state.total !== 0
            ? state.total - payload.quantity
            : (state.total = 0),
      };
    case actionType.EMPTY_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.selected
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case actionType.AUTHENTICATED_USER_DETAILS:
      return {
        ...state,
        authenticatedUserDetails: payload,
      };
    default:
      return state;
  }
};
