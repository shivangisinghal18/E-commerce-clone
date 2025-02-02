const stripe = require("stripe")('sk_test_51QD2OOGCWDzuuoy2ycR3mpgG0rb4Z3UdNEkdbHS0C34cjojPvREybeDbOHH4EoA8qhWWVrUHVXGi49IGynbkTPYn00CTHfyT28');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000' 
}));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cartitems } = req.body;

  try {
    const lineItems = Object.values(cartitems).map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.producttitle,
          images: [item.productimage],
        },
        unit_amount: item.productprice * 100, 
      },
      quantity: 2,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000/success_page`,
      cancel_url: `http://localhost:3000/home`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(4242, () => console.log(`Listening on port 4242!`));