const express =  require('express');
const app = express();
const path = require('path');

//Rutas
app.get('/home' , (req,res)=>{
    res.status(200);
});

app.use(express.static(path.join(__dirname , 'src')));

app.listen(3000);