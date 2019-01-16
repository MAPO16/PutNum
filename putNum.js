const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.put('/rest/numero', function (req, res) {
   connection.query('UPDATE `Num_Serie` SET `Numero_Serie`=?, `Id_Descripcion`=? , `Id_Articulo`=?, `Id_Area`=?, `Id_Inmueble`=? where `Id_NumSer`=?', [req.body.Numero_Serie,req.body.Id_Descripcion,req.body.Id_Articulo,req.body.Id_Area, req.body.Id_Inmueble, req.body.Id_NumSer], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
});


app.listen(9954, function () {
 console.log('Node app is running on port 9954');

});  