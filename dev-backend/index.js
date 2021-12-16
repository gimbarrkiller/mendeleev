const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const port = 8000
const app = express()
const DEFAULT_DELAY = 500

const pause = (ms = DEFAULT_DELAY) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), ms))

const buildResp = () => ({
  profile: {
    id: 12,
    name: 'kamil',
    age: 22,
    token: 1232,
    firstName: 'asdqwe',
  },
});

const buildRespTimeZone = () => ({
  timeZone: {
    language: 'ru',
    city: 'kazan',
    date: new Date(),
    dateCreated: '2021-06-21T08:56:00.000Z',
  },
});

const buildRespLogin = () => ({
  email: 'kamil@citynix.ru',
});

app.use(cors());

app.get('/profile', async (req, res) => {
  await pause();
  res.send(buildResp());
});

app.get('/timeZone', async (req, res) => {
  await pause();
  res.send(buildRespTimeZone());
});

app.get('/login', async (req, res) => {
  await pause();
  res.send(buildRespLogin());
});

app.post('/auth/signUp', jsonParser, async (req, res) => {
  await pause();
  const { email, password } = req.body;

  if (email === 'usedemail@gmail.com') {
    return res
      .status(403)
      .send({ field: 'email', message: 'Данный email уже зарегистрирован' });
  }

  if (email === "") {
    return res
      .status(403)
      .send({ field: 'email', message: 'email - обязательное поле' });
  }

  if (password.length < 6) {
    return res
      .status(403)
      .send({ field: 'password', message: 'Пароль слишком короткий' });
  }

  return res
    .status(200)
    .send({ field: 'ok', message: 'Регистрация прошла успешно' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
