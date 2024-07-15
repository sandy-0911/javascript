//items ke sath khelta hai
//for of : operatable on arrays, objects and maps
// ["" , "" , ""]
// [{},{},{}]
// arrays ke andar at the end kuch bhi aa sakta hai tumhe

const array = [1, 2, 3, 4, 5];

for (const items of array) {
  //console.log(items)
}

const greetings = "Hello World!";
for (const letters of greetings) {
  // console.log(letters)
}

//Maps in js

const map = new Map();
map.set(`IN`, `India`);
map.set(`FR`, `France`);
map.set(`SRL`, `Srilanka`);

//maps are iterable with for of loop
for (const [key, value] of map) {
  // console.log(key, ':-' , value)
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

//objects are not iterable through for of loop

//FOR IN Loop : indicies ke sath khelta hai
for (const key in myObject) {
  //console.log(myObject[key])
}
//objects pe laga sakte ho ye loop

//works for  arrays
//maps are not iteratable with this

// array.forEach( function (item) {
//     console.log(item)
// } ) //with normal function

array.forEach((item) => {
  //console.log(item)
});
//with arrow function

function other(item) {
  console.log(item);
}

// array.forEach(other)

//more parameters can be passed
array.forEach((item, index, arr) => {
  //console.log(item, index, arr);
});

const myCoding = [
  {
    game1: "NFS",
    game2: "Spiderman",
  },
  {
    game1: "NFS",
    game2: "Spiderman",
  },
  {
    game1: "NFS",
    game2: "Spiderman",
  },
];

myCoding.forEach( (item) => {
    console.log(item.game1)
})

