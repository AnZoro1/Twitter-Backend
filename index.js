const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(require('./routes/users.route.js'))
app.use(require('./routes/twitts.route.js'))

app.use(require('./routes/comments.route.js'))
mongoose
  .connect(
    'mongodb+srv://into:code@cluster0.lz09cai.mongodb.net/Twitter?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Успешно соединились с сервером MongoDB')
  })
  .catch(() => {
    console.log('Ошибка при соединении с сервером MongoDB')
  })
app.listen(4000, () => {
  console.log('Сервер запущен успешно!')
})
