{
  function renderApp() {
    return "Welcome to the app!";
  }

  function renderLogin() {
    return "Please log in to continue.";
  }

  let isLoggedIn = false;

//   if (isLoggedIn) {
//     console.log(renderApp());
//   } else {
//     console.log(renderLogin());
//   }

isLoggedIn ? console.log(renderApp()) : console.log(renderLogin());

}
