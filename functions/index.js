const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const { response } = require('express');
const { default: Stripe } = require('stripe');
const stripe = require("stripe")('sk_test_51GftyxGZdxS6q8LJrHEDeFcdd5reOysnkR7fHUDKP9MGWpAUs905MIoOk7hOS6YZVPKm63YDTRlWMo9C8LBVVJaE00NbCZtz6E');

//API
//App config
const app=express();
//Middlewares
app.use(cors({ origin:true }));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total=request.query.total;
    console.log("Payment Request Recieved BOOM!! for this amount: ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})
//Listen command
exports.api= functions.https.onRequest(app);
