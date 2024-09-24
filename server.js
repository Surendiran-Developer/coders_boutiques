const express = require('express'); 
const authRoutes = require('./src/routes/authRoutes'); 

const app = express(); 


app.use(express.json());


app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the auth app');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
