console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

//1. Defining callback externally

const showWelcomeMessage = (userName) => {
  console.log(`Welcome ${userName} You are logged in now.`);
};

handleUserLogin(showWelcomeMessage);

//2. defining callback within

handleUserLogin((userName) => {
  console.log(`Again ${userName}! You are welcome.`);
});
