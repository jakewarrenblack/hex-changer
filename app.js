window.addEventListener('load', (event) => {

var button = document.getElementById('switcher');
let hexValue;
let hexFinal;
let hexCode;
button.addEventListener("click",function(){
let letterValues = ['a','b','c','d','e','f'];
let numValues = [0,1,2,3,4,5,6,7,8,9];
hexValue = [];


for(var i =0; i<3; i++){
    hexValue.push(letterValues[Math.floor(Math.random() * letterValues.length)])
    hexValue.push(numValues[Math.floor(Math.random() * numValues.length)])
}

hexValue.unshift('#');
hexString = hexValue.toString();

//g represents global in this modifier, there's also i for insensitive and m for multiline
hexFinal = hexString.replace(/,/g, "");

console.log(hexFinal);
    hexCode = document.getElementById('hexVal');
    hexCode.value = hexFinal;
    var body = document.querySelector('body');
    body.style.backgroundColor = hexFinal;
})


button.addEventListener('click',copyToClipboard);

function copyToClipboard(){
    hexCode.select();
    document.execCommand("copy");
}
});