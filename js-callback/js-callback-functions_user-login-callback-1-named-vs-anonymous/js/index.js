console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

//Part1: Passing a named callback function.
const showMeWelcomeMessage = () => {
  console.log("Welcome! You are logged in now.");
};

handleUserLogin(showMeWelcomeMessage);

//Part2: Passing Anonyms callback function

handleUserLogin(() => {
  showMeWelcomeMessage();
});
