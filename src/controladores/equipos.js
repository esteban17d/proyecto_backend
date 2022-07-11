module.exports = class Equipos {
    constructor() {
    }

    listarEquipos (connection){
        return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM Equipos", function (err, result, fields) {
            if (err) {
                return reject(err);
            }
            resolve(result);
            });
        });
    };

    verEquipo(connection, data){
        return new Promise(function(resolve, reject) {
            connection.query(`SELECT * FROM Equipos WHERE id = ${data.id}`, function (err, result, field) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    };

    editarEquipo(connection, data){
        connection.query(`UPDATE Equipos SET ${data.elementoEditar} = "${data.valor}" WHERE id = ${data.id}`, function(err, result) {
            if (err) throw err;
        });
    };

    eliminarEquipo(connection, data){
        connection.query(`DELETE FROM Equipos WHERE Id = ${data.id}`, function(err, result) {
            if (err) throw err;
        });
    };

    insertarEquipo(connection, data, callback){
        connection.query(
            `INSERT INTO Equipos (nombre, descripcion, serial, fechaInicialMarcha, ultimaFechaMarcha, ultimaFechaMantenimiento, idUltimoMantenimiento)
            VALUES 
            (
                "${data.nombre}",
                "${data.descripcion}",
                "${data.serial}",
                "${data.fechaInicialMarcha}",
                "${data.ultimaFechaMarcha}",
                "${data.ultimaFechaMantenimiento}",
                "${data.idUltimoMantenimiento}")`, function (err, result) {
            if (err) throw err;
        });
    };

}

