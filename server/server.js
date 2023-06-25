const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("");
});

app.post("/pay", async (req, res) => {
  console.log(req.body);
  const session = await Stripe.checkout.sessions.create({
    billing_address_collection: "required",
    line_items: req.body.products,
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/fail",
    mode: "payment",
  });
  res.redirect(200, session.url);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
