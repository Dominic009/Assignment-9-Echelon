const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


// MongoDB Connection
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@domserver.es4znv5.mongodb.net/?retryWrites=true&w=majority&appName=DomServer`;

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

    const categoriesCollection = client.db('EchelonDB').collection('categories');
    const datasCollection = client.db('EchelonDB').collection('datas');
    const reviewsCollection = client.db('EchelonDB').collection('reviews');



    app.get('/categories', async(req, res) => {
        const result = await categoriesCollection.find().toArray();
        res.send(result)
    }) 

    app.get('/datas', async(req, res) => {
        const results = await datasCollection.find().toArray();
        res.send(results)
    })

    app.get('/reviews', async(req, res) => {
        const results = await reviewsCollection.find().toArray();
        res.send(results)
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
