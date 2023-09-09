console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

const showWelcomeMessage = (userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
};
const showErrorMessage = (errorMessage) => {
  console.log(`Login error: ${errorMessage}`);
};

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");
