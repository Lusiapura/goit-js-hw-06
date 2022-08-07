//const counterValue = 0;
const count = {
    counterValue: 0,
    increment () {
        this.counterValue += 1;
    },
    
    decrement () {
        this.counterValue -= 1;
    },
}

const decrementBt = document.querySelector('button[data-action="decrement"]');
const incrementBt = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBt.addEventListener('click', onClickHander);
incrementBt.addEventListener('click', ofClickHander);

function onClickHander () {
    count.decrement();
    valueEl.textContent = count.counterValue;
    console.log(count);
};

function ofClickHander (counterValue) {
    count.increment();
    valueEl.textContent = count.counterValue;
    console.log(count);
}; 