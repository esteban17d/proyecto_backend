const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./src/rutas/main'));
app.use('/equipos/', require('./src/rutas/equipos'));
app.use('/trabajos/', require('./src/rutas/trabajos'));

app.listen(3000, () => {
    console.log("Servidor en puerto 3000...")
});

