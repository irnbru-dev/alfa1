const arr = ['rttr', 'sdgsrfgr', 'sf', 'fsf']

for (let i=0; i<arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' +i+  ', value: ' + arr[i])
    }, 3000);
}