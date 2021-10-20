const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//MONGODB_URI='mongodb+srv://adminstock:d1kyq1NBLzN9f73I@cluster0.9egxc.mongodb.net/Cluster0?retryWrites=true&w=majority';

const app = express();
//mongoose.connect('mongodb://localhost/mevn-detabase')
//mongoose.connect('mongodb+srv://adminstock:d1kyq1NBLzN9f73I@cluster0.9egxc.mongodb.net/Cluster0?retryWrites=true&w=majority')
    //.then(db => console.log('DB is connected'))
      //.catch(err => console.error(err));

// mongoose profe
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://adminstock:d1kyq1NBLzN9f73I@cluster0.9egxc.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true }).then(
   () => { console.log('Database ESTA CONECTADA') },
  err => { console.log('NO SE PUDO CONECTAR'+ err)}
);


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use  ('/tasks', require('./routes/tasks'));

//static file
app.use(express.static(__dirname + '/public'));

//server is listening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});