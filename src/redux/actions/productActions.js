export const setMenu = (list) => {
  console.log(list);
  return {
    type: "GET_PRODUCTS_REQUEST",
    payload: list,
  };
};
