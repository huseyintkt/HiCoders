var express = require('express');
var router = express.Router();

let personList = [
  {
      "firstName": "John",
      "lastName": "Meier",
      "gender": "M",
      "birthday": "01.05.2000",
      "email": "john@hicoders.ch",
      "password": "s34ret",
      "about": "me about me"
  },
  {
      "firstName": "Mirjam",
      "lastName": "Herrman",
      "gender": "F",
      "birthday": "21.05.2002",
      "email": "mirjam@hicoders.ch",
      "password": "s34ret",
      "about": "I am crazy!"
  },
  {
      "firstName": "Selami",
      "lastName": "Mettler",
      "gender": "M",
      "birthday": "11.02.1940",
      "email": "selami@hicoders.ch",
      "password": "s34ret",
      "about": "Merhaba selam!"
  }
];


/* GET home page. */
router.get('/employees/', function(req, res, next) {
  let newArray = JSON.parse(JSON.stringify(personList))
  let list = newArray.reverse().filter( (o, i) => i<20)
  res.json(list);
});

router.post('/employees/', function(req, res, next) {
  personList.push(req.body)
  res.sendStatus(200);
});

module.exports = router;