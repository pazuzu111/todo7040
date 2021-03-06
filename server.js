const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`BAMMMMMMM!!! 👺 👺 👺 👺 ⚪ ️⚪ ️⚪ ️⚪️ `);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

const todoNotes = require('./routes/todonotes-routes');
app.use('/todonotes', todoNotes);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});
