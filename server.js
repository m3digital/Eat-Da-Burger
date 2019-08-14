var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

// Use Express Static
app.use(express.static(process.cwd() + '/public'));

// Use Body Parser
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// Listening on port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Listening on PORT: ", PORT);
});