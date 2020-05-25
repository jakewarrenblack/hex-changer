window.addEventListener('load', (event) => {

var button = document.getElementById('switcher');

button.addEventListener("click",function(){
let letterValues = ['a','b','c','d','e','f'];
let numValues = [0,1,2,3,4,5,6,7,8,9];
let hexValue = [];

for(var i =0; i<3; i++){
    hexValue.push(letterValues[Math.floor(Math.random() * letterValues.length)])
    hexValue.push(numValues[Math.floor(Math.random() * numValues.length)])
}

hexValue.unshift('#');
hexString = hexValue.toString();

//g represents global in this modifier, there's also i for insensitive and m for multiline
var hexFinal = hexString.replace(/,/g, "");

console.log(hexFinal);
    var hexCode = document.getElementById('hexVal');
    hexCode.innerHTML = "HEX Value: " + hexFinal;
    var body = document.querySelector('body');
    body.style.backgroundColor = hexFinal;
})

});