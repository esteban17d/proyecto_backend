const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('Bienvenido a el sistema de mantenimiento SMAO')
});

module.exports = router;
// app.get("/empresas", (req, res) => {
//     res.render('empresas', {empresas: leerEmpresa(conexion)})
// });

// app.get("/insertar_empresa/:nombre/:contacto/:paisid", (req, res) => {
//     insertarEmpresa(
//         conexion,
//         {
//             nombre: req.params.nombre,
//             contacto: req.params.contacto,
//             paisid: req.params.paisid
//         },
//     );
//     res.redirect('/empresas')
// });

// app.get("/remover_empresa/:id", (req, res) => {
//     removerEmpresa(
//         conexion,
//         { id: req.params.id}
//     );
//     res.redirect('/empresas')
// });

// app.get("/modificar_empresa/:nombre/:contacto/:id", (req, res) => {
//     modificarEmpresa(
//         conexion,
//         {
//             contacto: req.params.contacto,
//             nombre: req.params.nombre,
//             id: req.params.id
//         }
//     );
//     res.redirect('/empresas')
// });

// app.get("/alimentos", (req, res) => {
//     res.render('alimentos', {alimentos: leerAlimento(conexion)})
// });

// app.get("/insertar_alimento/:nombre/:precio/:fechacaducidad/:empresaid", (req, res) => {
//     insertarAlimento(
//         conexion,
//         {
//             nombre: req.params.nombre,
//             precio: req.params.precio,
//             fechacaducidad: req.params.fechacaducidad,
//             empresaid: req.params.empresaid
//         },
//     );
//     res.redirect('/alimentos')
// });

// app.get("/modificar_alimento/:nombre/:precio/:fechacaducidad/:empresaid/:id", (req, res) => {
//     modificarAlimento(
//         conexion,
//         {
//             nombre: req.params.nombre,
//             precio: req.params.precio,
//             fechacaducidad: req.params.fechacaducidad,
//             empresaid: req.params.empresaid,
//             id: req.params.id
//         },
//     );
//     res.redirect('/alimentos')
// });

// app.get("/remover_alimento/:id", (req, res) => {
//     removerAlimento(
//         conexion,
//         { id: req.params.id},
//     );
//     res.redirect('/')
// });

// app.get("/clientes", (req, res) => {
//     res.render('clientes', {clientes: leerClientes(conexion)})
// });

// app.get("/insertar_cliente/:nombre/:contacto", (req, res) => {
//     insertarClientes(
//         conexion,
//         {
//             nombre: req.params.nombre,
//             contacto: req.params.contacto
//         },
//     );
//     res.redirect('/clientes')
// });

// app.get("/modificar_clientes/:nombre/:contacto/:id", (req, res) => {
//     modificarClientes(
//         conexion,
//         {
//             id: req.params.id,
//             nombre: req.params.nombre,
//             contacto: req.params.contacto
//         },
//     );
//     res.redirect('/clientes')
// });

// app.get("/remover_cliente/:id", (req, res) => {
//     removerClientes(
//         conexion,
//         { id: req.params.id},
//     );
//     res.redirect('/clientes')
// });

// app.get("/paises", (req, res) => {
//     res.render('paises', {paises: leerPaises(conexion)})
// });

// app.get("/insertar_paises/:nombre", (req, res) => {
//     insertarPaises(
//         conexion,
//         {
//             nombre: req.params.nombre,
//         },
//     );
//     res.redirect('/paises')
// });

// app.get("/modificar_paises/:nombre/:id", (req, res) => {
//     modificarPaises(
//         conexion,
//         {
//             id: req.params.id,
//             nombre: req.params.nombre,
//         },
//     );
//     res.redirect('/paises')
// });

// app.get("/remover_paises/:id", (req, res) => {
//     removerPaises(
//         conexion,
//         { id: req.params.id},
//     );
//     res.redirect('/paises')
// });