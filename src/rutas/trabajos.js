const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const Trabajos = require('../controladores/trabajos.js')

let trabajos = new Trabajos()

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
        console.log('Conexión exitosa Trabajos')
    }
});

router.get("/:tipoAMostrar", (req, res) => {
    trabajos.listarTrabajos(
        connection,
        {
            tipoAMostrar: req.params.tipoAMostrar
        }
    ).then(function(result) {
      res.send(result)
    })
});

router.get("/ver/:id", (req, res) => {
    trabajos.verTrabajo(
        connection,
        {
            id: req.params.id
        }
    ).then(function(result) {
      res.send(result)
    })
});

router.put("/editar/:elementoEditar/:valor/:idEquipo/:id", (req, res) => {
    trabajos.editarTrabajo(
        connection,
        {
            id: req.params.id,
            elementoEditar: req.params.elementoEditar,
            valor: req.params.valor,
            idEquipo: req.params.idEquipo
        }
    )
    res.redirect('/');
});

router.post("/insertar/:fechaPlanificada/:fechaInicio/:fechaFinal/:idEquipo/:estatus/:tipo", (req, res) => {
    trabajos.insertarTrabajo(
        connection,
        {
            fechaPlanificada: req.params.fechaPlanificada,
            fechaInicio: req.params.fechaInicio,
            fechaFinal: req.params.fechaFinal,
            idEquipo: req.params.idEquipo,
            estatus: req.params.estatus,
            tipo: req.params.tipo,
        }
    )
    res.redirect('/');
});

router.delete("/eliminar/:id", (req, res) => {
    trabajos.eliminarTrabajo(
        connection,
        {
            id: req.params.id
        }
    )
    res.redirect('/');
});

module.exports = router;
