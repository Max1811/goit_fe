'use strict';

// task1

const ADMIN_PASSWORD = 'mango25';
let message;

message = prompt("Введите пароль");

if(message === null)
{
    message = 'Отменено пользователем!';
}

else if(message !== ADMIN_PASSWORD)
{
    message = 'Доступ запрещен, неверный пароль!';
}

else
{
    message = 'Добро пожаловать!';
}

console.log(message);

// task 2

let credits = 23580;
const PRICE_FOR_DROID = 3000;
let quantity;
let quantityInput = prompt('Введите количество дроидов, которых вы хотите приобрести: ');
let totalPrice;

quantity = Number(quantityInput);
if(isNaN(quantity) === true)
{
    console.log("Неверный ввод");
}

else
{
    totalPrice = quantity * PRICE_FOR_DROID;
    if(totalPrice > credits)
    {
        console.log("Недостаточно средств на счету!");
    }
    else
    {
        credits -= totalPrice;
        let messageForBuyingDroides = `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`;
        console.log(messageForBuyingDroides);
    }
}

//task3

let countryName = prompt("Введите страну ");
let deliveryCost;

switch (countryName) {
    case 'Китай':
      deliveryCost = 100;
      console.log(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;
  
    case 'Южная Америка':
      deliveryCost = 250;
      console.log(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;
  
    case 'Австралия':
      deliveryCost = 170;
      console.log(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;
  
    case 'Индия':
      deliveryCost = 80;
      console.log(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;

    case 'Ямайка':
      deliveryCost = 120; 
      console.log(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;
  
    default:
      console.log('В вашей стране доставка не доступна');
  }