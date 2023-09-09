console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
//1. With additional Callback

const showWelcomeMessage = (userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
};

handleUserLogin(showWelcomeMessage);

//2. Within Function Call

handleUserLogin((userName, userRole) => {
  console.log(
    `Welcome Again! ${userName}! You are logged in now as ${userRole}.`
  );
});
