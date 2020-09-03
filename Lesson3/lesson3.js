/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

let prime = 1;
let primeArr = [];

while (prime <= 100) {
    if (prime == 1) {
        primeArr.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (prime % i !== 0) {
            i += 1;
            result += 1;
        }
        if (result == prime) {
            primeArr.push(result);
        }
    }
    prime += 1;
}

console.log(primeArr);

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

function countBasketPrice(basket) {
    let sum = 0;

    for (let i = 0; i < basket.length; i++) {
        sum = sum + basket[i][1];
    }
    return sum;
}
const basket = [["Куртка", 5000], ["Штаны", 3000], ["Футболка", 1000]];
a = countBasketPrice(basket);
console.log("сумма корзины: " + a);

/*4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}*/
for (let i = 0; i < 9; i++, console.log(i)) {}

/*5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:*/
let x = "";
for(let i = 0; i < 20 ; i++){
    x = x + "x";
    console.log(x);
} 