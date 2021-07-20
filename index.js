const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//Config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

//BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Conexão com banco Mysql

   const sequelize = new Sequelize('test', 'user_test', 'T&st12345678', {
     host: "localhost",
     dialect: 'mysql'
})

//Routes

app.get("/gsa",function(req,res){
	res.render('formulario.handlebars')
});

app.post("/add",function(req,res){
	res.send("Texto: "+req.body.titulo+" Conteúdo: "+req.body.conteudo)
});







app.listen(8081, function() {
	console.log("Servidor rodando na URL http://localhost:8081");
});