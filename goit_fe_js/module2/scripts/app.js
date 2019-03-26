"use strict";

// task1

let input = 0;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число = ");
  if (!input) break;
  else numbers.push(Number(input));
}

if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
}

alert(`Общая сумма чисел = ${total}`);

// task 2

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
let usersAttempt;
let boolCheck = true;

while (boolCheck) {
  usersAttempt = prompt("Input password: ");

  if (attemptsLeft !== 0) {
    for (let i = 0; i < passwords.length; i++) {
      if (usersAttempt === passwords[i]) {
        alert("Добро пожаловать!");
        boolCheck = false;
        break;
      }
    }
    if (boolCheck === true) {
      attemptsLeft--;
      if (attemptsLeft > 0) {
        alert(`У вас осталось ${attemptsLeft} попыток!`);
      } else {
        alert("У вас закончились попытки, аккаунт заблокирован!");
        break;
      }
    }
  }
}
