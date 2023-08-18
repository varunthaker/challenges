let data = null;

// let check1 = Array.isArray(data);

// let check3 = isNaN(data);
// Null & BigInit

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("Null!");
    break;
  case "number":
    console.log("Number!");
    break;
  case "string":
    console.log("String!");
    break;
  case "bigInt":
    console.log("BigInt!");
    break;
  case "function":
    console.log("Function!");
    break;
  case "object":
    console.log("Object!");
    break;

  default:
    console.log("I have no Idea");
}
