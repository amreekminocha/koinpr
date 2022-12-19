import { actionType } from "./type";

export const showIndividualMarketplaceData = (payload) => {
  return {
    type: actionType.SHOW_DETAILS_OF_INDIVIDUAL_MARKETPLACE,
    payload: payload,
  };
};

export const addToCart = (payload) => {
  console.log(payload, "payload");
  return {
    type: actionType.ADD_TO_CART,
    payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload,
  };
};
export const subtractQuantity = (payload) => {
  console.log(payload);
  return {
    type: actionType.SUB_QUANTITY,
    payload,
  };
};
export const addQuantity = (payload) => {
  return {
    type: actionType.ADD_QUANTITY,
    payload,
  };
};
export const emptyCart = () => {
  return {
    type: actionType.EMPTY_CART,
  };
};
export const authenticatedUserDetails = (payload) => {
  return {
    type: actionType.AUTHENTICATED_USER_DETAILS,
    payload,
  };
};

