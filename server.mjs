console.log("My first server")

import express from "express";
const app = express()
const port = process.env.PORT || 5001;

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("resquest get" + req.ip)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})