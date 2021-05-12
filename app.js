const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');


//Database
const db = require('./config/connection');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('error' + err))

const app = express();

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',
        runtimeOptions:{
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true,
        },
}));
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.urlencoded({ extended: false }));


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index Route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

//Trails routes
app.use('/trails', require('./routes/trails'));


const PORT = process.env.PORT || 3000;

db.sync({force: false}).then(() => {
  app.listen(PORT, console.log(`Server listening on ${PORT}`));
})
