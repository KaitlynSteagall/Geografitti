document.getElementByIdnewUser(newUser).on("click", event => {
  event.preventDefault();

  const newUserInfo = {
    userName: document.getElementById(newUsername)
      .val()
      .trim(),
    passwordName: document.getElementById(newUserPassword)
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
    userName: document.getElementById(username)
      .val()
      .trim(),
    passwordName: document.getElementById(userPassword)
      .val()
      .trim(),

  };

  if (!(userInfo.userName && userInfo.passwordName)) {
    alert("You must enter your username and password!");
    return;
  }

});