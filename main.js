// let age = 10; 
// const nama = 'Biyel';
// console.log(`Aku ${nama}, umurku ${age} tahun`);

// age = 12;
// console.log(`Aku ${nama}, umurku ${age} tahun`);

// const cm = '20cm';
// const m = '35m';

// const cmfromstr = parseInt(cm);
// const mfromstr = parseInt(m);

// console.log(cmfromstr);
// console.log(mfromstr);

// function celciusToFahrenheit (temperature) {
//   const celciusInFahrenheit = ((9/5) * temperature) + 32; 

//   console.log(`${temperature} celcius dalam fahrenheit adalah ${celciusInFahrenheit}`)
// }

// const tempInCelcius = 33; 

// celciusToFahrenheit(tempInCelcius);

function hello (name, origin = 'Bandung'){
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}`;
}

const indra = hello('Indra'); 
console.log(indra);