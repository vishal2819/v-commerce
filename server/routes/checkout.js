const express = require("express");
const router = express.Router();
const braintree = require("braintree");

router.post("/", (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: "d345qjtjp6wb3d8f",
    publicKey: "573ygtwvrwpx73vy",
    privateKey: "af1605a8df88af33fc1ea39e1a78d005",
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $20
  const newTransaction = gateway.transaction.sale(
    {
      amount: "20.00",
      paymentMethodNonce: nonceFromTheClient,
      options: {
        // This option requests the funds from the transaction
        // once it has been authorized successfully
        submitForSettlement: true,
      },
    },
    (error, result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
    }
  );
});

module.exports = router;
