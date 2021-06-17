export default {
  formatCurrency: function (num) {
    return "kr" + Number(num.toFixed(2).toLocaleString() + "");
  },
};
