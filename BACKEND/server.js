const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;
const pool = require('./db');
const router = require('./Routes/routes');

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/api/get', router);


pool.connect().then(() => {
  console.log("Postgres Connected");
})
  .catch(err => {
    console.error("Connection Error", err);
  })



app.get('/', (req, res) => {
  res.send("Hiii...")
})

app.listen(PORT, (req, res) => {
  console.log(`DONEEEEEEEEEE....${PORT}`);
})
