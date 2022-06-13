module.exports = class Equipos {
    constructor(equipos) {
        this.equipos = equipos;
    }

    busquedaBinaria(arr, busqueda) {

        const puntoMedio = Math.floor(arr.length / 2);

        if (arr[puntoMedio].id == busqueda) {
            return arr[puntoMedio];
        }

        if (arr[puntoMedio].id < busqueda && arr.length > 1) {
            return this.busquedaBinaria(arr.slice(puntoMedio), busqueda);
        }

        if (arr[puntoMedio].id > busqueda && arr.length > 1) {
            return this.busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
        }
        return -1;
    }

    listarEquipos(){
        return this.equipos;
    }

    verEquipo(id){
        let equipo = this.busquedaBinaria(this.equipos, id.id)
        if (equipo == -1) {
            console.log('No se ha encontrado el elemento por el id')
        }
        else {
            return equipo
        }
    }

    editarEquipo(id, nombre, descripcion, serial, fechaInicialMarcha, ultimaFechaMarcha, ultimaFechaMantenimiento, idUltimoMantenimiento){
        for (var i = 0; i < this.equipos.length; i++) {
            if (this.equipos[i]['id'] == id.id){
                this.equipos[i] = {
                    id: id,
                    nombre: nombre,
                    descripcion: descripcion,
                    serial: serial,
                    fechaInicialMarcha: fechaInicialMarcha,
                    ultimaFechaMarcha: ultimaFechaMarcha,
                    ultimaFechaMantenimiento: ultimaFechaMantenimiento,
                    idUltimoMantenimiento: idUltimoMantenimiento
                }
            }
        }
    }

    eliminarEquipo(id){
        for (var i = 0; i < this.equipos.length; i++) {
            if (this.equipos[i]['id'] == id.id){
                this.equipos = this.equipos.splice(i+1,this.equipos.length)
            }
        }
    }

    insertarEquipo(id, nombre, descripcion, serial, fechaInicialMarcha, ultimaFechaMarcha, ultimaFechaMantenimiento, idUltimoMantenimiento){
        this.equipos.push(id)
    }
}

