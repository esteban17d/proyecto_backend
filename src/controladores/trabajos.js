module.exports = class Trabajos {
    constructor() {
    }

    listarTrabajos(connection, data){
        return new Promise(function(resolve, reject) {
            if (data.tipoAMostrar == "all"){
                connection.query(`SELECT * FROM Trabajos`, function (err, result, field) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
            };
            connection.query(`SELECT * FROM Trabajos WHERE tipo = "${data.tipoAMostrar}"`, function (err, result, field) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    };

    verTrabajo(connection, data){
        return new Promise(function(resolve, reject) {
            connection.query(`SELECT * FROM Trabajos WHERE id = ${data.id}`, function (err, result, field) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    };

    editarTrabajo(connection, data){
        if (data.elementoEditar = "fechaFinal"){
            if (data.estatus == "terminado"){
                connection.query(`UPDATE Equipos SET ultimaFechaMarcha = "${data.valor}" WHERE id = ${data.idEquipo}`, function(err, result) {
                    if (err) throw err;
                })                    
            }else {
                connection.query(`UPDATE Equipos SET ultimaFechaMantenimiento = "${data.valor}" WHERE id = ${data.idEquipo}`, function(err, result) {
                    if (err) throw err;
                });                    
            }

        }
        connection.query(`UPDATE Trabajos SET ${data.elementoEditar} = "${data.valor}" WHERE id = ${data.id}`, function(err, result) {
            if (err) throw err;
        });
    }

    eliminarTrabajo(connection, data){
        connection.query(`DELETE FROM Trabajos WHERE Id = ${data.id}`, function(err, result) {
            if (err) throw err;
        });
    };

    insertarTrabajo(connection, data){
        if (data.estatus == "terminado"){
            connection.query(`UPDATE Equipos SET ultimaFechaMarcha = "${data.fechaFinal}" WHERE id = ${data.idEquipo}`, function(err, result) {
                if (err) throw err;
            })                    
        }else {
            connection.query(`UPDATE Equipos SET ultimaFechaMantenimiento = "${data.fechaFinal}" WHERE id = ${data.idEquipo}`, function(err, result) {
                if (err) throw err;
            });                    
        }

        connection.query(
            `INSERT INTO Trabajos (fechaPlanificada, fechaInicio, fechaFinal, idEquipo, estatus, tipo)
            VALUES 
            (
                "${data.fechaPlanificada}",
                "${data.fechaInicio}",
                "${data.fechaFinal}",
                "${data.idEquipo}",
                "${data.estatus}",
                "${data.tipo}")`, function (err, result) {
            if (err) throw err;
        });
    }
}

