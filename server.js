const express = require('express');
const sequelize = require('./config/connection.js');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

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

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
