const np = require("number-precision");

function calculateResultSum(purchases, discount) {
  //   let total = purchases.reduce((acc, purchase) => (acc += purchase), 0);
  let total = purchases.reduce((acc, purchase) => np.plus(acc, purchase), 0);

  //   total = total * discount; // применяем скидку
  total = np.times(total, discount);

  return total;
}

module.exports = { calculateResultSum };

// gпожалуйста экспортируй объект в котором находится..
// если много функций лучше оборачивать в обхект где все функции
// если не придвидится добавлять фнкции, то можно просто = calculateResultSum
// если хотим использовать import from, то нудно в pacage.json прописать свойство "type": "module", чтобы конструкция requier заменить на import export