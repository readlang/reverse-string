function reverseString(str) {
  // type your code here
  let newString = ""
  for (let index = 0; index < str.length; index++) {
    newString = newString + str[str.length-1-index]
    
  }

  return newString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


console.log( reverseString( "hellocat" ) )