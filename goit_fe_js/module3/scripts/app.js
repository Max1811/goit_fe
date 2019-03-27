"use strict";

// task 1

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = (allLogins, login) => {
  for (const element of allLogins) {
    if (element === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  let isValid = isLoginValid(login);
  if (isValid === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else {
    let isUnique = isLoginUnique(logins, login);
    if (isUnique === false) {
      console.log("Такой логин уже используется!");
    } else {
      allLogins.push(login);
      console.log("Логин успешно добавлен!");
      console.log(allLogins);
    }
  }
};

while (true) {
  let newLogin = prompt("Input new login: ");
  if (newLogin === null) break;

  addLogin(logins, newLogin);
}
