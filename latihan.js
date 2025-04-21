// latihan
function categorizeNumber(input) {
  let count = 0;
  if (typeof input != "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }
  if (input > 0) {
    for (let i = 0; i <= input; i++) {
      if (input % i == 0) {
        count++;
      }
    }
    if (count > 2) {
      if (input % 2 == 0) {
        return "Genap";
      } else if (input % 2 != 0) {
        return "Ganjil";
      }
    } else {
      return "Prima";
    }
  } else if (input < 0) {
    return "Negatif";
  } else {
    return "Nol";
  }
}
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
