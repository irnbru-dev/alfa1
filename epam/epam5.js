const f = a => a.reduce((s,c) => [c, ...s],[])
console.log(f([1,2,3,4,5,6,7]));

//[7,6,5,4,3,2,1]