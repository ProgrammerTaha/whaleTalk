/*

todo: Take a phrase and translate it into its “whale talk” equivalent

% no consonants. Only vowels excluding “y”
% u‘s and e‘s are doubled
% result is sung slowly


*/

//text you want to translate into “whale talk”
let input = 'Hi, Human';
input = input.toUpperCase();

//array of vowels
const vowels = ['A', 'E', 'I', 'O', 'U'];

//to store the vowels from the input string
let resultArray = [];

/* loop to iterate through each letter of the input 
then through the vowels then pushing them into 
a new array */
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'E') {
        resultArray.push('EE');
      } else if (input[i] === 'U') {
        resultArray.push('UU');
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}

//logging the result
resultArray = resultArray.join('');
console.log(resultArray);