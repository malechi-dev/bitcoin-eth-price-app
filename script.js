const btcPrice = document.querySelector('#btc-value');
const ethPrice = document.querySelector('#eth-value');
const btcPrice24 = document.querySelector('#btc-value-24');
const ethPrice24 = document.querySelector('#eth-value-24');

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=bitcoin')
  .then(response => response.json())
  .then(data => {
  btcPrice.innerText = String.fromCharCode(163) + data[0].current_price;
  btcPrice24.innerText = data[0].price_change_percentage_24h.toFixed(2) + '%';
  })
  .catch(error => console.error(error));

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=ethereum')
  .then(response => response.json())
  .then(data => {
  ethPrice.innerText = String.fromCharCode(163) + data[0].current_price;
  ethPrice24.innerText = data[0].price_change_percentage_24h.toFixed(2) + '%';
  })
  .catch(error => console.error(error));