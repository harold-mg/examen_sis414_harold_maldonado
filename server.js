const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir un modelo de usuario
const User = mongoose.model('User', {
  name: String,
  email: String
});

app.use(bodyParser.json());

// Rutas CRUD
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).send('User created successfully');
});

app.put('/api/users/:id', async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { name, email });
  res.send('User updated successfully');
});

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send('User deleted successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
