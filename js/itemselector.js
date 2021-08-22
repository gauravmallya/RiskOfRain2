//Used to simply accumulate items in the "/items folder"
fs = require('fs');

var items = "";

fs.readdirSync("items").forEach((file) => {
   items += '"' + file + '", ';
})
console.log(items);