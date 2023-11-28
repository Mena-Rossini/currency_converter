# TECHNOHACKS PROJECT 3 - CURRENCY CONVERTER 

## DESCRIPTION :

A basic currency converter web application using the Open Exchange Rates API.

## FEATURES :

- Convert currencies in real-time.
- Select from a variety of currencies.
- View the exchange rate between the selected currencies.

## SOURCE CODE :

### index.html :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Currency Converter</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="converter-container">
      <h2>Currency Converter</h2>
      <div>
        <label for="fromCurrency">From:</label>
        <select id="fromCurrency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <!-- Add more currencies as needed -->
        </select>
        <br />
        <label for="amount">Amount:</label>
        <input type="number" id="amount" placeholder="Enter amount" />
      </div>
      <div>
        <label for="toCurrency">To:</label>
        <select id="toCurrency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <!-- Add more currencies as needed -->
        </select>
        <br />
        <label for="convertedAmount">Converted Amount:</label>
        <input type="text" id="convertedAmount" readonly />
      </div>
      <button onclick="convertCurrency()">Convert</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

### style.css :

```
body {
  font-family: Arial, sans-serif;
  background-image: url("bgimg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

#converter-container {
  text-align: center;
  background: transparent;
  backdrop-filter: blur(10px);
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
}

select,
input,
button {
  margin: 5px;
}
```

### script.js :

```
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
```

## TO GET THE API KEY : 

* Navigate to this website to get the needed api key - https://app.exchangerate-api.com/

## WEBPAGE :

### Basic Outline :

![2023-11-28 (7)](https://github.com/Mena-Rossini/currency_converter/assets/102855266/22cf9e47-0ebd-4883-83ff-358a8dc8fbfb)

### Working state :

![2023-11-28 (8)](https://github.com/Mena-Rossini/currency_converter/assets/102855266/024ec1a2-03a6-4a38-be6e-c561c685064e)


