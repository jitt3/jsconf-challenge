// CHALLENGE
// Use Typescript to solve the following challenge:

// You are provided a string containing a list of positive integers separated by a space (" ").
// Take each value and calculate the sum of its digits, which we call it's "weight".
// Then return the list in ascending order by weight, as a string joined by a space.

// For example: 99 will have "weight" 18, 100 will have "weight"
// 1 so in the output 100 will come before 99.

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let's consider them to be strings and not numbers:
// 100 is before 180 because its "weight" (1) is less than the one of 180 (9)
// and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

// All numbers in the list are positive integers and the list can be empty.

// -------------------------------------------------------------------------------------------------------

interface NumberAndWeight {
  number: number;
  weight: number;
}

export function sortNumbersByWeight(inputList: string): string {
  // If list is an empty string, simply return an empty string
  if (!inputList) return '';

  // Get array of numbers (as strings) by splitting the `inputList` string by space (' ')
  const numbers = inputList.split(' ');

  // Map the `numbers` array to an array of `NumberAndWeight` objects
  const numberAndWeightMappings: NumberAndWeight[] = numbers.map((numStr) => ({
    number: parseInt(numStr),
    weight: numStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0),
  }));

  const sortedMappings = numberAndWeightMappings.sort((a, b) => {
    const difference = a.weight - b.weight;

    // Weight of both `a` and `b` objects is equal, so compare as strings
    if (difference === 0) {
      // Perform a lexicographical comparison
      // If `a` is less than `b`, return -1, meaning that `a` comes before `b`
      // Else, return 1, meaning that `a` comes after `b`
      return a.number.toString() < b.number.toString() ? -1 : 1;
    }

    return difference;
  });

  return sortedMappings.map((m) => m.number).join(' ');
}
