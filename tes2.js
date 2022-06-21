function test2(str) {
  let words = str.split(" ");
  let max = 0;
  let maxWord = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      for (let k = 0; k < word.length; k++) {
        if (letter === word[k]) {
          count++;
        }
      }
    }
    if (count > max) {
      max = count;
      maxWord = word;
    }
  }
  return maxWord;
}

console.log(test2("it is the greatest the day ever"));
