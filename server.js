const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

//Database
const db = require('./config/connection');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));



//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',
        runtimeOptions:{
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true,
        },
}));


app.set('view engine', 'handlebars');

//body parser
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json ())

// //set static folder
app.use(express.static(path.join(__dirname, 'public')));

// //Index Route
app.get('/', (req, res) => res.render('index', { layout: 'main' }));

// //Trails routes
// app.use('/trails', require('./routes/trails'));

app.use(routes);


//Keep this
db.sync({force: false}).then(() => {
  app.listen(PORT, console.log(`Server listening on ${PORT}`));
})
