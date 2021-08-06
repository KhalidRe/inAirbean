export const setMenu = (list) => {
  return {
    type: "GET_PRODUCTS_REQUEST",
    payload: list,
  };
};
export const setTotal = (Receit) => {
  return {
    type: "GET_TOTAL",
    payload: Receit,
  };
};
