import express from "express";
import path, { dirname } from 'path';
const app = express()
const port =process.env.PORT || 3000


app.get('/abc', (req, res) => {
  res.send('Hello World!')
  console.log("resquest get" + req.ip)
})

app.get('/getweather', (req, res) => {
  res.send('Hello World!')
  console.log("resquest get" + req.ip)
})

app.get('/gettime', (req, res) => {
  res.send('Hello World!')
  console.log("resquest get" + req.ip)
})






const __dirname=path.resolve();
app.use('/',express.static(path.join(__dirname,'/web/build')))
app.use('*',express.static(path.join(__dirname,'/web/build')))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})