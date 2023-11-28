// Replace 'YOUR_APP_ID' with your Open Exchange Rates App ID
const appID = "f42e5241badeaf3840d02548";

function convertCurrency() {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  if (!amount) {
    alert("Please enter an amount.");
    return;
  }

  const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      if (exchangeRate) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById("convertedAmount").value = convertedAmount;
      } else {
        alert("Invalid currency selected.");
      }
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
      alert("Error fetching exchange rates. Please try again later.");
    });
}
