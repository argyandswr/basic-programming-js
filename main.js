// variables
let umur = 10; // -> mutable 
const nama = 'Biyel'; // -> immutable
console.log(`Aku ${nama}, umurku ${umur} tahun`);

umur = 12;
console.log(`Aku ${nama}, umurku ${umur} tahun`);

const cm = '20cm';
const m = '35m';

const cmfromstr = parseInt(cm);
const mfromstr = parseInt(m);

console.log(cmfromstr);
console.log(mfromstr);


// Function
function celciusToFahrenheit (temperature) {
  const celciusInFahrenheit = ((9/5) * temperature) + 32; 

  console.log(`${temperature} celcius dalam fahrenheit adalah ${celciusInFahrenheit}`)
}

const tempInCelcius = 33; 

celciusToFahrenheit(tempInCelcius);

function hello (name, origin = 'Bandung'){
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}`;
}

const indra = hello('Indra'); 
console.log(indra);


//Object -> same as Map in Dart, there are keys and values

// how to create object
const user = {
  firstName : "Don", 
  lastName : "Jumbo", 
  age : 5,
}

// how to access 
// using dot
console.log(user.firstName);
console.log(user.lastName);

// using square bracket []
console.log(user['firstName']);

// object destructuring 
const {firstName, lastName, age} = user;
console.log(`nama: ${firstName} ${lastName} dan umur: ${age} tahun`);

// bisa ngubah valuesnya juga
user.firstName = "Mae"; 

// we can delete di properties also 
delete user.age;


// Array

