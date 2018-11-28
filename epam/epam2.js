const asyncFn = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('prom'))
        },1000)
    });
};

const prom = Promise.resolve();
prom.then(asyncFn);
prom.then(asyncFn);

//одновременный ввывод prom