
class app {
    constructor() {
        this.bind();
    }
    bind() {
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });

        document.querySelector('.sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });

    }
    handleClick(val) {
        const counterEl = document.querySelector('.counter');
        const value = parseInt(counterEl.innerText);
        counterEl.innerText = value + val;
    }
}

new app();


console.log('console.log');
console.warn('console.warn');
console.error('console.error');
console.trace('console.trace');

console.group('My Group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My Group');

console.time('console.time');
setTimeout(() => {
    console.timeEnd('console.time');
}, 0);

console.table(['Charles Miranda', 'Digital Innovation One']);
console.assert(1 === 0, 'Ops');
console.log('%c styled log', 'color: blue; font-size: 40px');
