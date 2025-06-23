// // latihan
// function categorizeNumber(input) {
//   let count = 0;
//   if (typeof input != "number") {
//     throw new Error("Input harus berupa bilangan bulat");
//   }
//   if (input > 0) {
//     for (let i = 0; i <= input; i++) {
//       if (input % i == 0) {
//         count++;
//       }
//     }
//     if (count > 2) {
//       if (input % 2 == 0) {
//         return "Genap";
//       } else if (input % 2 != 0) {
//         return "Ganjil";
//       }
//     } else {
//       return "Prima";
//     }
//   } else if (input < 0) {
//     return "Negatif";
//   } else {
//     return "Nol"
//   }
// }
// console.log(categorizeNumber(15)); // Output: "Ganjil"
// console.log(categorizeNumber(12)); // Output: "Genap"
// console.log(categorizeNumber(17)); // Output: "Prima"
// console.log(categorizeNumber(0)); // Output: "Nol"
// console.log(categorizeNumber(-5)); // Output: "Negatif"

// try {
//   categorizeNumber("abc");
// } catch (error) {
//   console.log(error.message);
// } // Output: "Input harus berupa bilangan bulat"

// //* latihan functional programming
// const sampleProducts = [
//   { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
//   { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
//   { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
//   { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
//   { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
// ];

// function getProductsByCategory(products, category) {
//   /**
//    * TODO:
//    * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
//    */
//   const getProduct = products.filter((product) => product.category == category); 
//   return getProduct;
// }

// function findProductById(products, id) {
//   /**
//    * TODO:
//    * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
//    */
//   const getProduct = products.find((product) => product.id === id); 
//   return getProduct;
// }

// function calculateTotalPrice(products) {
//   /**
//    * TODO:
//    * Gunakan metode array immutable untuk menghitung total harga semua produk.
//    */
//   const totalPrice = products.reduce((acc, product) => acc + product.price, 0); 
//   return totalPrice; 
// }

// function applyDiscount(products, discount) {
//   /**
//    * TODO:
//    * Gunakan metode array immutable untuk mengembalikan array baru,
//    * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
//    */
//   const discountPrice = products.map((product) => {
//     return{
//       ...product, 
//       price: product.price - (product.price * discount/100),
//     }
//   })
  
//   return discountPrice;
// }

// console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
// console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
// console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
// console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3

//* Latihan JS Async
const API = {
  fetch(delay, simulateError = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (simulateError) {
          return reject(new Error(`Error from delay ${delay}`));
        }

        return resolve(`Data from delay ${delay}`);
      }, delay);
    });
  }
};

const sampleErrorData = [
  {
    delay: 100,
    simulateError: false,
  },
  {
    delay: 50,
    simulateError: true,
  },
];

const sampleSuccessData = [
  {
    delay: 100,
    simulateError: false,
  },
  {
    delay: 50,
    simulateError: false,
  },
];

export { API, sampleErrorData, sampleSuccessData };

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */



function processData(data) {
  const promises = data.map(item => API.fetch(item.delay, item.simulateError));

  return Promise.all(promises);
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
