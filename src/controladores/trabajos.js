module.exports = class Trabajos {
    constructor(trabajos) {
        this.trabajos = trabajos;
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

    listarTrabajos(tipo = false){
        let trabajos_filtrados = []
        if (tipo == false) {
            return this.trabajos;
        }
        for (var i = 0; i < this.trabajos.length; i++) {
            if (this.trabajos[i].tipo == tipo) {
                trabajos_filtrados.push(this.trabajos[i])
            }
        }
        return trabajos_filtrados
    }

    verTrabajo(id){
        let trabajo = this.busquedaBinaria(this.trabajos, id.id)
        if (trabajo == -1) {
            console.log('No se ha encontrado el elemento por el id')
        }
        else {
            return trabajo
        }
    }

    editarTrabajo(id){
        let equipos = id.equipos.equipos
        for (var i = 0; i < this.trabajos.length; i++) {
            if (this.trabajos[i]['id'] == id.id){
                this.trabajos[i] = {
                    id: id.id,
                    fechaPlanificada: id.fechaPlanificada,
                    fechaInicio: id.fechaInicio,
                    fechaFinal: id.fechaFinal,
                    idEquipo: id.idEquipo,
                    estatus: id.estatus,
                    tipo: id.tipo
                }
                for (var i = 0; i < equipos.length; i++) {
                    if (equipos[i]['id'] == id.idEquipo){
                        equipos[i]['idUltimoMantenimiento'] = id.id
                        if(id.estatus == 'terminado' && id.tipo == 'mantenimiento_general'){
                            equipos[i]['ultimaFechaMantenimiento'] = id.fechaFinal
                        }
                        else {
                            equipos[i]['ultimaFechaMarcha'] = id.fechaFinal
                        }
                    }
                }
                return equipos        
            }
        }
    }

    eliminarTrabajo(id){
        for (var i = 0; i < this.trabajos.length; i++) {
            if (this.trabajos[i]['id'] == id.id){
                this.trabajos.splice(i,1)
            }
        }
    }

    insertarTrabajo(id){
        let equipos = id.equipos.equipos
        this.trabajos.push({
            id: id.id,
            fechaPlanificada: id.fechaPlanificada,
            fechaInicio: id.fechaInicio,
            fechaFinal: id.fechaFinal,
            idEquipo: id.idEquipo,
            estatus: id.estatus,
            tipo: id.tipo
        })
        for (var i = 0; i < equipos.length; i++) {
            if (equipos[i]['id'] == id.idEquipo){
                equipos[i]['idUltimoMantenimiento'] = id.id
                if(id.estatus == 'terminado' && id.tipo == 'mantenimiento_general'){
                    equipos[i]['ultimaFechaMantenimiento'] = id.fechaFinal
                    }
                else {
                    equipos[i]['ultimaFechaMarcha'] = id.fechaFinal
                }
            }
        }
        return equipos
    }
}

