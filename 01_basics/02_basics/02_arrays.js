const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

//  one more easy operator than concat
// const all_new_Heros = [...marvel_heros, ...dc_heros];
// // console.log(all_new_Heros);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));   // intresting for interviews

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


