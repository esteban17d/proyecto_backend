const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const Equipos = require('../controladores/equipos.js')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'smao_1',
    user: 'estebang17',
    password: 'Abc123,.-',
    multipleStatements: true
});

connection.connect(async(error) => {
    if (error) {
        throw error
    }
    else {
        console.log('Conexión exitosa Equipos')
    }
});

let equipos = new Equipos()

router.get("/", (req, res) => {
    equipos.listarEquipos(
        connection
    ).then(function(result) {
      res.send(result)
    })
});

router.get("/ver/:id", (req, res) => {
    equipos.verEquipo(
        connection,
        {
            id: req.params.id
        }
    ).then(function(result) {
        res.send(result)
    })
});

router.put("/editar/:elementoEditar/:valor/:id", (req, res) => {
    equipos.editarEquipo(
        connection,
        {
            elementoEditar: req.params.elementoEditar,
            valor: req.params.valor,
            id: req.params.id
        }
    )
    res.redirect('/');
});

router.post("/insertar/:nombre/:descripcion/:serial/:fechaInicialMarcha/:ultimaFechaMarcha/:ultimaFechaMantenimiento/:idUltimoMantenimiento", (req, res) => {
    equipos.insertarEquipo(
        connection,
        {
            nombre: req.params.nombre,
            descripcion: req.params.descripcion,
            serial: req.params.serial,
            fechaInicialMarcha: req.params.fechaInicialMarcha,
            ultimaFechaMarcha: req.params.ultimaFechaMarcha,
            ultimaFechaMantenimiento: req.params.ultimaFechaMantenimiento,
            idUltimoMantenimiento: req.params.idUltimoMantenimiento
        }
    )
    res.redirect('/');
});

router.delete("/eliminar/:id", (req, res) => {
    equipos.eliminarEquipo(
        connection,
        {
            id: req.params.id
        }
    )
    res.redirect('/');
});

module.exports = router
