let price = document.querySelectorAll('.basket__goods-title_price-number');
let prices = document.querySelectorAll('.basket__goods-title_price-numbers');
let input = document.querySelectorAll('.basket__goods--number-input');


input.oninput = function() {
    let a = (price.innerHTML).replace(/\s/g, '');
    prices.innerHTML = (input.value * parseInt(a)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};