const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); 

dotenv.config(); 

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', authRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
