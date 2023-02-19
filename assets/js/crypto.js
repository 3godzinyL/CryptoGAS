const btcPriceElem = document.getElementById("btc-price");
const btcChange1hElem = document.getElementById("btc-change-1h");
const btcChange24hElem = document.getElementById("btc-change-24h");
const btcChange7dElem = document.getElementById("btc-change-7d");

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((response) => response.json())
  .then((data) => {
    btcPriceElem.textContent = data.market_data.current_price.usd;
    btcChange1hElem.textContent = data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) + "%";
    btcChange24hElem.textContent = data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2) + "%";
    btcChange7dElem.textContent = data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) + "%";
  })
  .catch((error) => console.log(error));

const ethPriceElem = document.getElementById("eth-price");
const ethChange1hElem = document.getElementById("eth-change-1h");
const ethChange24hElem = document.getElementById("eth-change-24h");
const ethChange7dElem = document.getElementById("eth-change-7d");

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then((response) => response.json())
  .then((data) => {
    ethPriceElem.textContent = data.market_data.current_price.usd;
    ethChange1hElem.textContent = data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) + "%";
    ethChange24hElem.textContent = data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2) + "%";
    ethChange7dElem.textContent = data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) + "%";
  })
  .catch((error) => console.log(error));