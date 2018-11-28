console.log('a');
setTimeout(function () {
    console.log('b')
},1000);
setTimeout(function () {
    console.log('c')
},0);
console.log('d');

//adcb