const express = require('express')
const router = express.Router()

const Trabajos = require('../controladores/trabajos.js')
let equipos = require('./equipos.js')


const trabajosData = [{
  "id": 1,
  "fechaPlanificada": "11/28/2021",
  "fechaInicio": "11/13/2021",
  "fechaFinal": "2/24/2022",
  "idEquipo": 1,
  "estatus": "pendiente",
  "tipo": "preventivo"
}, {
  "id": 2,
  "fechaPlanificada": "9/8/2021",
  "fechaInicio": "8/27/2021",
  "fechaFinal": "7/1/2021",
  "idEquipo": 2,
  "estatus": "pendiente",
  "tipo": "correctivo"
}, {
  "id": 3,
  "fechaPlanificada": "1/4/2021",
  "fechaInicio": "9/29/2021",
  "fechaFinal": "12/30/2021",
  "idEquipo": 3,
  "estatus": "en_proceso",
  "tipo": "correctivo"
}, {
  "id": 4,
  "fechaPlanificada": "8/14/2021",
  "fechaInicio": "1/3/2022",
  "fechaFinal": "7/31/2021",
  "idEquipo": 4,
  "estatus": "en_proceso",
  "tipo": "preventivo"
}, {
  "id": 5,
  "fechaPlanificada": "8/22/2021",
  "fechaInicio": "8/16/2021",
  "fechaFinal": "10/3/2021",
  "idEquipo": 5,
  "estatus": "en_proceso",
  "tipo": "correctivo"
}, {
  "id": 6,
  "fechaPlanificada": "5/23/2021",
  "fechaInicio": "2/20/2022",
  "fechaFinal": "7/24/2021",
  "idEquipo": 6,
  "estatus": "pendiente",
  "tipo": "preventivo"
}, {
  "id": 7,
  "fechaPlanificada": "6/4/2022",
  "fechaInicio": "4/10/2022",
  "fechaFinal": "4/21/2022",
  "idEquipo": 7,
  "estatus": "pendiente",
  "tipo": "correctivo"
}, {
  "id": 8,
  "fechaPlanificada": "1/24/2021",
  "fechaInicio": "2/11/2022",
  "fechaFinal": "12/2/2021",
  "idEquipo": 8,
  "estatus": "pendiente",
  "tipo": "correctivo"
}, {
  "id": 9,
  "fechaPlanificada": "2/11/2021",
  "fechaInicio": "11/28/2021",
  "fechaFinal": "12/16/2021",
  "idEquipo": 9,
  "estatus": "en_proceso",
  "tipo": "preventivo"
}, {
  "id": 10,
  "fechaPlanificada": "4/12/2021",
  "fechaInicio": "3/26/2022",
  "fechaFinal": "6/15/2021",
  "idEquipo": 10,
  "estatus": "pendiente",
  "tipo": "preventivo"
}, {
  "id": 11,
  "fechaPlanificada": "12/21/2021",
  "fechaInicio": "8/20/2021",
  "fechaFinal": "1/21/2022",
  "idEquipo": 11,
  "estatus": "pendiente",
  "tipo": "preventivo"
}, {
  "id": 12,
  "fechaPlanificada": "6/2/2022",
  "fechaInicio": "2/25/2022",
  "fechaFinal": "4/22/2022",
  "idEquipo": 12,
  "estatus": "terminado",
  "tipo": "correctivo"
}, {
  "id": 13,
  "fechaPlanificada": "6/9/2022",
  "fechaInicio": "9/1/2021",
  "fechaFinal": "11/27/2021",
  "idEquipo": 13,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 14,
  "fechaPlanificada": "9/23/2021",
  "fechaInicio": "4/24/2022",
  "fechaFinal": "4/2/2022",
  "idEquipo": 14,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 15,
  "fechaPlanificada": "4/23/2021",
  "fechaInicio": "10/30/2021",
  "fechaFinal": "7/25/2021",
  "idEquipo": 15,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 16,
  "fechaPlanificada": "7/25/2021",
  "fechaInicio": "3/29/2022",
  "fechaFinal": "9/11/2021",
  "idEquipo": 16,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 17,
  "fechaPlanificada": "4/11/2021",
  "fechaInicio": "1/19/2022",
  "fechaFinal": "8/17/2021",
  "idEquipo": 17,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 18,
  "fechaPlanificada": "5/30/2022",
  "fechaInicio": "12/18/2021",
  "fechaFinal": "3/10/2022",
  "idEquipo": 18,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 19,
  "fechaPlanificada": "9/24/2021",
  "fechaInicio": "6/16/2021",
  "fechaFinal": "3/7/2022",
  "idEquipo": 19,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}, {
  "id": 20,
  "fechaPlanificada": "11/17/2021",
  "fechaInicio": "10/30/2021",
  "fechaFinal": "1/1/2022",
  "idEquipo": 20,
  "estatus": "terminado",
  "tipo": "mantenimiento_general"
}]

let trabajos = new Trabajos(trabajosData)

router.get("/:tipo", (req, res) => {
    res.send(trabajos.listarTrabajos(req.params.tipo))
});

router.get("/", (req, res) => {
    res.send(trabajos.listarTrabajos(false))
});

router.get("/ver/:id", (req, res) => {
    res.send(trabajos.verTrabajo(
        {
            id: req.params.id,
        }
    ))
});

router.put("/editar/:id/:fechaPlanificada/:fechaInicio/:fechaFinal/:idEquipo/:estatus/:tipo", (req, res) => {
    equipos.equipos.equipos = trabajos.editarTrabajo(
        {
            id: req.params.id,
            fechaPlanificada: req.params.fechaPlanificada,
            fechaInicio: req.params.fechaInicio,
            fechaFinal: req.params.fechaFinal,
            idEquipo: req.params.idEquipo,
            estatus: req.params.estatus,
            tipo: req.params.tipo,
            equipos: equipos.equipos
        }
    )
});

router.post("/insertar/:id/:fechaPlanificada/:fechaInicio/:fechaFinal/:idEquipo/:estatus/:tipo", (req, res) => {
    equipos.equipos.equipos = trabajos.insertarTrabajo(
        {
            id: req.params.id,
            fechaPlanificada: req.params.fechaPlanificada,
            fechaInicio: req.params.fechaInicio,
            fechaFinal: req.params.fechaFinal,
            idEquipo: req.params.idEquipo,
            estatus: req.params.estatus,
            tipo: req.params.tipo,
            equipos: equipos.equipos
        }
    )
});

router.delete("/eliminar/:id", (req, res) => {
    trabajos.eliminarTrabajo(
        {
            id: req.params.id,
        }
    )
});

module.exports = router;
