
const router = require("express").Router();
const stripe = require("stripe")('sk_test_51KCprmJW5ALuK8Dtz7Og1wwbKeBxE95qcz2vIvAQQXj5XZcHPFEuMCZu00QVySHD4sVCRUytj5ypP1flNiCL78wN00MmgaOwc5');


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;






















// const router = require("express").Router();
// // const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY
// const stripe = require("stripe")(KEY);

// router.post("/payment", async (req, res) => {
//   try {
//       const { amount} = req.body;
//       // Psst. For production-ready applications we recommend not using the
//       // amount directly from the client without verifying it first. This is to
//       // prevent bad actors from changing the total amount on the client before
//       // it gets sent to the server. A good approach is to send the quantity of
//       // a uniquely identifiable product and calculate the total price server-side.
//       // Then, you would only fulfill orders using the quantity you charged for.

//       const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency: "usd"
//       });

//       res.status(200).send(paymentIntent.client_secret);
//     } catch (err) {
//       res.status(500).json({ statusCode: 500, message: err.message });
//     }

// });

// module.exports = router;
