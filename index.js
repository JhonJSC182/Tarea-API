const express = require('express')
const { Db } = require('mongodb')
const app = express()
const database = require ('./database')
app.use(express.json());

app.get('/punto1', async function (req, res) {
  const data = await database.punto1();
  res.send(data);
});

app.get('/punto2', async function (req, res) {
  const data = await database.punto2();
  res.send(data);
});

app.get('/punto3', async function (req, res) {
  const data = await database.punto3();
  res.send(data);
});

app.get('/punto4', async function (req, res) {
  const data = await database.punto4();
  res.send(data);
});

app.get('/punto5', async function (req, res) {
  const data = await database.punto5();
  res.send(data);
});

app.get('/punto6', async function (req, res) {
  const data = await database.punto6();
  res.send(data);
});

app.get('/punto7', async function (req, res) {
  const precio = req.query.precio;
  const data = await database.punto7(precio);
  res.send(data);
});

app.post('/punto8', async function (req, res) {
  const precio = req.body.precio;
  const data = await database.punto7(precio);
  res.send(data);
});


app.listen(3000)

