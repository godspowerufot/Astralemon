const express = require("express");
const cors = require("cors"); // This should be correct
const stripe = require("stripe")(
  "sk_test_51PfoFIGdWNCS6S2AxrbzhTVpVj48M6K93ckImG65Kv22bwXsKdtMPiMeQrwkC1Y1dzpR3mbDVQBAnhhtrCh51LKi00pDplQCBo"
); // Replace with your secret key

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
