const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

// Conexão com banco

   const sequelize = new Sequelize('test', 'user_test', 'T&st12345678', {
     host: "localhost",
     dialect: 'mysql'
})

//Routes

app.get("/gsa",function(req,res){
	res.render('formulario.handlebars')


});







app.listen(8081, function() {
	console.log("Servidor rodando na URL http://localhost:8081");
});