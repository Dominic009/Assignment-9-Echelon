const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// MongoDB Connection
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@domserver.es4znv5.mongodb.net/?retryWrites=truew=majorityappName=DomServer`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const categoriesCollection = client
      .db("EchelonDB")
      .collection("categories");
    const reviewsCollection = client.db("EchelonDB").collection("reviews");
    const datasCollection = client.db("EchelonDB").collection("datas");

    // Get requests
    app.get("/categories", async (req, res) => {
      const result = await categoriesCollection.find().toArray();
      res.send(result);
    });

    app.get("/datas", async (req, res) => {
      const results = await datasCollection.find().toArray();
      res.send(results);
    });

    app.get("/reviews", async (req, res) => {
      const results = await reviewsCollection.find().toArray();
      res.send(results);
    });


    //Post requests
    app.post("/payment", async (req, res) => {
      const paymentInfo = req.body;

      //generating random id for each transaction
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      const traxId = result;
      /////

      const paymentDetails = {
        store_id: "whate668136e8a38c6",
        store_passwd: "whate668136e8a38c6@ssl",
        total_amount: paymentInfo.amount,
        currency: "EUR",
        tran_id: traxId,
        success_url: "http://localhost:8000/success-payment",
        fail_url: "http://yoursite.com/fail.php",
        cancel_url: "http://yoursite.com/cancel.php",
        cus_name: "Customer Name",
        cus_email: "cust@yahoo.com",
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: "1000",
        ship_country: "Bangladesh",
        multi_card_name: "mastercard,visacard,amexcard",
        value_a: "ref001_A",
        value_b: "ref002_B",
        value_c: "ref003_C",
        value_d: "ref004_D",
      };

      res.send("Got it");
    });

    app.post('./sucess-payment', async(req, res) => {

    })



















    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log("Server is running from port");
});
