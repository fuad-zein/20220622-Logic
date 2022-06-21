const engineer = ["devi", "eko", "irianto", "eka", "bagus", "putranto"];
const product = ["bayu", "eko", "putranto", "adi", "persada", "bagus"];

function test1(name) {
  let result = [];
  for (let i = 0; i < engineer.length; i++) {
    if (engineer[i] === name) {
      result.push("engineer");
    }
  }
  for (let i = 0; i < product.length; i++) {
    if (product[i] === name) {
      result.push("product");
    }
  }
  return result;
}

console.log(test1("putranto", "eko"));
console.log(test1("putranto", "adi"));
