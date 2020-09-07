/*0 Создайте объект calcus, у которого есть 2 свойства "a" и "b" , оба числа. И метод sumLog который выводит в консоль сумму двух этих чисел*/

const calcus = {
    a: 5,
    b: 8,
    sumLog: function () {
        console.log(this.a + this.b)
    }
}

/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function numberToObj (n) {
    let numberObj = {};
    let keysQueue = ['hundreds', 'tens', 'units'];
    if (n < 999) {
      while (n > 0) {
        let tempoResult = n / 10;
        let divResult = n % 10;
        numberObj[keysQueue.pop()] = divResult;
        n = Math.floor(tempoResult);
      }
    } else {
      console.log('Число больше 999!')
    }
  
    return numberObj;
  }
  
  let resultJob = numberToObj(375);
  
  console.log(resultJob);


/* 2 Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу. */


const basket = {
    products: [],
    countBasketPrice: function () {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum = sum + this.products[i].price * this.products[i].count;
        }
        return sum;
    }
}

const products = [
    { name: 'Куртка', price: 5000, count: 1 },
    { name: 'Штаны', price: 3000, count: 1 },
    { name: 'Футболка', price: 1000, count: 1 }
];

basket.products = products;

console.log("сумма корзины: " + basket.countBasketPrice());