const goods = [
  {
    id: 1,
    name: "Спортивные брюки",
    description: "Однотонные спортивные брюки",
    sizes: ["XS", "S", "M", "L"],
    price: 1500,
    available: true,
  },
  {
    id: 2,
    name: "Спортивные толстовки",
    description: "Теплая толстовка с капюшоном",
    sizes: ["XS", "S", "M", "L"],
    price: 1999,
    available: true,
  },
  {
    id: 3,
    name: "Спортивные футболки",
    description: "Легкая футболка",
    sizes: ["XS", "S", "M", "L"],
    price: 650,
    available: false,
  },
  {
    id: 4,
    name: "Спортивные шорты",
    description: "Трикотажные шорты с принтом",
    sizes: ["S", "M", "L"],
    price: 650,
    available: false,
  },
  {
    id: 5,
    name: "Кеды",
    description: "Текстильные кроссовки NASA",
    sizes: [41, 43, 44],
    price: 2500,
    available: true,
  },
];

const basket = [
  {
    good: goods[1],
    amount: 5,
  },
  {
    good: goods[4],
    amount: 3,
  }
]


function addBasket(id, amount) {

  let resultGoods = goods.findIndex(goods => goods.id == id);
  let resultBasket = basket.findIndex(basket => basket.good == goods[resultGoods]);

  if (goods[resultGoods].available && resultBasket === -1) {
    basket.push(
      {
        good: goods[resultGoods],
        amount: amount,
      }
    );
  } else if (resultBasket > -1) {
    basket[resultBasket].amount += +amount;
  } else {
    console.log("Товар недоступен!");
  }
}

function delBasket(id) {
  if (id < basket.length) {
    basket.splice(id, id)
    console.log(`Удален товар --> ${basket[id].good.name}`);
  } else {
    console.log("Not found")
  }
}


function delAllBasket() {
  basket.splice(0, basket.length)
  console.log("Корзина очищена!")
}


function totalBasket() {
  let totalAmount = 0;
  let totalSumm = 0;
  for (let i = 0; i < basket.length; i++) {
    totalAmount += +basket[i].amount;
    totalSumm += +basket[i].good.price
  }
  let total = {
    "totalAmount": totalAmount,
    "totalSumm": totalSumm * totalAmount,
  };
  return total
}


addBasket(2, 15)
addBasket(5, 3)
addBasket(1, 15)
console.log(basket)
console.log(totalBasket())
// console.log(basket)
console.log("________________________")
delBasket(0)
console.log(basket)
console.log("________________________")
delAllBasket()
