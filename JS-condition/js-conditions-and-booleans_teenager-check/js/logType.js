let data;

let typeOfData = typeof data;

let message = "";

switch (typeOfData) {
  case "undefined":
    message = "Undefine!";
    break;

  case "string":
    message = "String!";
    break;
  case "bigInt":
    message = "BigInt!";
    break;
  case "function":
    message = "Function!";
    break;
  case "boolean":
    message = "boolean!";
    break;

  //number & NaN

  case "number":
    if (Number.isNaN(data)) {
      message = "Not a Number";
      break;
    }
    message = "Number!";
    break;

  case "object":
    if (Array.isArray(data)) {
      message = "Array";
      break;
    } else if (data == null) {
      message = "Null";
    } else {
      message = "Object";
    }
    break;

  default:
    message = "Does not exist";
}

console.log(`Youre data-type is ${message}`);
