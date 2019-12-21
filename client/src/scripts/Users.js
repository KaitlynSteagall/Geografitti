document.getElementByIdnewUser(newUser).on("click", event => {
  event.preventDefault();

  const newUserInfo = {
    userName: $("#username")
      .val()
      .trim(),
    passwordName: $("#userPassword")
      .val()
      .trim(),

  };

  if (!(newUserInfo.userName && newUserInfo.passwordName)) {
    alert("You must enter a username and password!");
    return;
  }

});

document.getElementByIdnewUser(login).on("click", event => {
  event.preventDefault();

  const userInfo = {
    userName: $("#username")
      .val()
      .trim(),
    passwordName: $("#userPassword")
      .val()
      .trim(),

  };

  if (!(userInfo.userName && userInfo.passwordName)) {
    alert("You must enter your username and password!");
    return;
  }

});