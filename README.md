

To give an example, let’s say the user’s balance is 0.5 BTC and 2 ETH. If the current BTC/USD price is 60000 and the ETH/USD price is 3000, then the user’s total balance in USD would be 60000 \* 0.5 + 3000 \* 2 = 36000 USD.

### Submission

Please fork the repl.it, and share the link with us. You can add the answers to the question directly in the document.

---

## Task

Create **one API endpoint using Node and Express that takes in a user id and returns the user's total balance in USD**.

Keep the user’s balances stored in memory. An example of the data to be stored is provided at the end of this section. Feel free to add more entries or change the way the data is stored if you want, but this is not necessary.

You will need to fetch the current prices from a third party public API. You can use the price from any cryptocurrency exchange but it is recommended that you use Bitstamp.

Here is a link to their API docs: https://www.bitstamp.net/api/#ticker

Assume that the only assets that the user’s balance can contain are **BTC and ETH**.

Ensure the API endpoint works correctly by writing at least one test case using the **Mocha and Chai** frameworks.

There is a test scaffold `test.js` that you can use and `package.json` has been changed so that `npm run test` will run the unit tests.

It’s expected that this task should take less than 2-3 hours to complete. If you find yourself spending too much time on this task, then just give a short explanation about what aspects were particularly time consuming and what steps you would’ve done in order to complete the task.

Aim to write clear and concise code.

```
const userBalances = {
  "user-1": {
    "BTC": "0.5",
    "ETH": "2"
  },
  "user-2": {
    "BTC": "0.1",
  },
  "user-3": {
    "ETH": "5",
  },
}
```

## Questions

**1. (Optional) If you didn’t have time to complete your intended design, what else would you have done?**

> if there is more time, I would like to deploy the api and let you guys test it on api testing tool such as postman.

**2. Which took the most time? What did you find most difficult?**

> Understanding the currency the api supported, there seems to be limited amount of currency

**3. If we wanted the balance to update on the frontend more often (10 times per second), how would you improve the current system to handle this?**

> if we are updating the frontend more often. if we were using react, we can make use of the useEffect function to set a time to run and fetch the new amount from our api not doing it on our backend as it would cause resources in our backend instead we can make use of the user's browser to get that done

**4. How did you find the test overall? If you have any suggestions on how we can improve the test, we'd love to hear them!**

> Limited instructions is given, there is no expected output and can we use other methods to store our data.
