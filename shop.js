const goods = [    
    {   id: 1,
        name: 'Рубашка',
        description: 'Рубашка в клетку',
        sizes: [42, 44],
        price: 100,
        available: true,
    },

    {
        id: 2,
        name: 'Ботинки',
        description: 'Ботинки черные',
        sizes: [37, 38],
        price: 200,
        available: true,
    },

    {
        id: 3,
        name: 'Свитшот',
        description: 'Свитшот синий',
        sizes: [42, 44, 46],
        price: 500,
        available: true,
    },

    {
        id: 4,
        name: 'Футболка',
        description: 'Футболка с принтом',
        sizes: [42, 44, 46, 48],
        price: 400,
        available: true,
    },

    {
        id: 5,
        name: 'Кроссовки',
        description: 'Кроссовки Nike',
        sizes: [38, 39],
        price: 800,
        available: true,
    },
]


const basket = [
    {good: goods[0],
    amount: 2},

    {good: goods[2],
    amount: 3},
]




function sumAndAmount () { // Функция подсчета суммы и количества
    let amountAll = 0
    let sumAll = 0
    for (i = 0; i < basket.length; i++){
        amountAll += basket[i].amount
     }
     for (i = 0; i < basket.length; i++){
        sumAll += basket[i].good.price * basket[i].amount
     }
     return {totalAmount: amountAll,
        totalSumm: sumAll}
}


function pushGoods (goodId, amounQuantity) { // Функция добавления товара в корзину
    basket.push (
        {'good' : goods[Number(goodId)],
        'amount' : Number(amounQuantity)
        }
    )
    return basket
}


function deleteAll () { // Функция очистки корзины
    basket.length = 0
    return basket
}


function deleteOne (n) { // Функция удаления одного товара по его названию
    let cutySearch = n;
    let cityId;
    for(i = 0; i < basket.length; i++) {
    if(basket[i].good.name == cutySearch) {
        cityId = basket.indexOf(basket[i])
        break;
        }
    }

    basket.splice(cityId, 1)
    return basket    
}


// console.log(pushGoods(process.argv[2], process.argv[3]))
// console.log(deleteOne(process.argv[2]))
// console.log(deleteAll(process.argv[2]))
console.log(sumAndAmount(process.argv[2]))
