// Dependencies
const express = require('express');
const path = require('path');

//loads handlebar module
const exphbs = require('express-handlebars');
//initializes handlebars instance 
const hbs = exphbs.create({});

//Setting a handle bars as default templat engine for server. 
//Method used to set up template engine for rendering dynamic views in web application. First parameter is the file extension i.e .handlebars and 
//second parameter tells Express to use engine function of hbs object to render template with handlebar extension
app.engine('handlebars', hbs.engine);
//App Setting the view engine of express application to use handlebars
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  