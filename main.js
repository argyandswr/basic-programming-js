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
const nama_buah = new Array('semangka', 'mangga', 'pisang', 'jambu'); // object constructor (yg dalam kurung bisa diisi array length jg)
console.log(nama_buah);

// pake array from -> bisa buat breakdown string jadi array char bisa juga buat duplikat array lain (contoh 2)
const nama2 = 'udin sedunia';
const breakdown_nama2 =  Array.from(nama2); 
//contoh2
const nama_buah_duplikat = Array.from(nama_buah); 

//Literal 
const nama_hewan = ['ayam', 'sapi', 'ikan'];

/*
ada operasi dan method juga: 
1. .push(added_item) -> buat nambahin element di slot terakhir
2. delete nama_array -> ngapus element tapi slot masih ada 
3. .splice(index berapa, berapa element [bakal berurutan]) -> ngapus element dan juga slotnya
4. .shift() -> buat ngapus element pertama dan .pop() -> vice versa
5. .reverse() -> ngebalik urutan element
6. .sort()
*/


// Map -> mirip object tapi lebih canggih 
// key di object cm boleh string sedangkan di map key-nya bisa apa aja
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap); // bikinnya pake object constructor

const nama_tetangga = new Map(); 
// buat nambahin key values di Map kita pake .set(key, value)
nama_tetangga.set('firstName', "ivan"); 
nama_tetangga.set('lastName', "gunawan"); 
console.log(nama_tetangga);

// buat akses value Map kita pake .get(key)
console.log(nama_tetangga.get('firstName'));  

//ngapus pake .delete(key)
nama_tetangga.delete('lastName');
console.log(nama_tetangga.get('lastName'));  
