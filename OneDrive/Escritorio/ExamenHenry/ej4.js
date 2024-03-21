function numeroSimetrico(num) {
    const numStr = num.toString(); // Convert the number to a string
    const reversedStr = numStr.split('').reverse().join(''); // Reverse the string
  
    // Check if the reversed string is equal to the original string
    return numStr === reversedStr;
  }
  module.exports = numeroSimetrico
  
  // Example usage:
  console.log(numeroSimetrico(11711)); // Should return true