var express = require('express');
var app = express();


app.set('viwe engine','pug');

aap.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
})

app.listem(3000,function(err){
	if (err) return console.log('Hubo error'), process.ext(1); 

	console.log('Platzigam escuchando en el puerto 3000');

})