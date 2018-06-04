const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

//init app
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log('Webhook server is listening, port 3000'));

app.get('/', function(req,res){
    res.send("deplop");
})

const verificationController = require('./controllers/verification');
app.get('/webhook', verificationController);
const messageWebhookController = require('./controllers/messageWebhook');
app.post('/webhook', messageWebhookController);

//Page access toket: EAAUlZAuTFadIBAB7GydA5ijvcmXImLvaocyrobfkIYX50RHZCVERhfBjC0IZABbEkqTapwZBaRG7aUFpgQbETynypcy70mC3ylOb35AL8zXbiR2FZBZCdz7eW25iDwVZB5d1IGa5ulMd3EaaZA7WA4lyaZBy7vr1hghmbyG35pc5JpAZDZD
//EAAUlZAuTFadIBAEzPfNr7UREZAmyqXyYZAnjR8T00dxYHzRFK9RhkE7lgk4gZBgmiWWbzDUpZAsQZCObtFSoFG1GYPZB9lJC3p3liD7rfZAtczzb9MRQ2ftlSLm3HKymCd7A7XlWJmbmZCZB1q6TT1NTZB6UsZBxiNFSaNSt2ZCvxyoNxwQZDZD
// Call back url
/*
Web Interface                 http://127.0.0.1:4041
Forwarding                    http://592b6664.ngrok.io -> localhost:80
Forwarding                    https://592b6664.ngrok.io -> localhost:80
*/
