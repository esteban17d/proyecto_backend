const express = require('express')
const router = express.Router()

const Equipos = require('../controladores/equipos.js')

let equiposData = [{
  "id": 1,
  "nombre": "Victor Delta Bravo Whiskey Juliett Tango Romeo Mike Lima Charlie Yankee Quebec India",
  "descripcion": "blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum",
  "serial": "368057196-8",
  "fechaInicialMarcha": "12/20/2021",
  "ultimaFechaMarcha": "8/21/2021",
  "ultimaFechaMantenimiento": "12/31/2021",
  "idUltimoMantenimiento": 1
}, {
  "id": 2,
  "nombre": "Alfa Echo Sierra Victor Juliett Bravo Mike Oscar Golf Uniform Papa Zulu Foxtrot Tango Yankee Quebec Whiskey Charlie",
  "descripcion": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
  "serial": "531327104-0",
  "fechaInicialMarcha": "1/25/2022",
  "ultimaFechaMarcha": "8/10/2021",
  "ultimaFechaMantenimiento": "12/20/2021",
  "idUltimoMantenimiento": 2
}, {
  "id": 3,
  "nombre": "Alfa Charlie Sierra Oscar Zulu Kilo Foxtrot Hotel Uniform Victor India Delta Yankee",
  "descripcion": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
  "serial": "307597411-0",
  "fechaInicialMarcha": "3/14/2022",
  "ultimaFechaMarcha": "8/2/2021",
  "ultimaFechaMantenimiento": "12/12/2021",
  "idUltimoMantenimiento": 3
}, {
  "id": 4,
  "nombre": "Papa Echo Charlie Kilo Foxtrot Yankee Romeo Lima Golf Victor Bravo",
  "descripcion": "integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum",
  "serial": "931467277-8",
  "fechaInicialMarcha": "5/6/2022",
  "ultimaFechaMarcha": "8/1/2021",
  "ultimaFechaMantenimiento": "6/4/2022",
  "idUltimoMantenimiento": 4
}, {
  "id": 5,
  "nombre": "India Zulu Whiskey Juliett Mike Victor Uniform Echo Kilo Oscar Lima November",
  "descripcion": "vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
  "serial": "988292961-3",
  "fechaInicialMarcha": "5/11/2022",
  "ultimaFechaMarcha": "2/15/2022",
  "ultimaFechaMantenimiento": "1/6/2022",
  "idUltimoMantenimiento": 5
}, {
  "id": 6,
  "nombre": "Uniform Oscar Foxtrot X-ray November Yankee Golf Mike Papa Delta Lima Juliett Zulu Sierra India Alfa Tango Charlie Bravo",
  "descripcion": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",
  "serial": "374080727-X",
  "fechaInicialMarcha": "7/23/2021",
  "ultimaFechaMarcha": "12/25/2021",
  "ultimaFechaMantenimiento": "5/22/2022",
  "idUltimoMantenimiento": 6
}, {
  "id": 7,
  "nombre": "Echo Juliett Golf X-ray Papa November Mike Yankee Bravo Foxtrot Charlie Delta Hotel Tango Sierra Oscar Quebec Whiskey",
  "descripcion": "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
  "serial": "394927831-1",
  "fechaInicialMarcha": "4/6/2022",
  "ultimaFechaMarcha": "4/2/2022",
  "ultimaFechaMantenimiento": "7/10/2021",
  "idUltimoMantenimiento": 7
}, {
  "id": 8,
  "nombre": "Uniform Echo Delta Zulu Kilo Charlie Quebec Papa Foxtrot Hotel Victor X-ray Lima Golf Yankee Romeo Oscar Sierra November",
  "descripcion": "aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
  "serial": "577112382-X",
  "fechaInicialMarcha": "5/20/2021",
  "ultimaFechaMarcha": "3/20/2022",
  "ultimaFechaMantenimiento": "2/18/2022",
  "idUltimoMantenimiento": 8
}, {
  "id": 9,
  "nombre": "X-ray Delta Lima Victor Quebec November Echo Oscar Mike Whiskey Juliett Hotel Alfa Sierra Zulu Golf Yankee",
  "descripcion": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget",
  "serial": "267177036-7",
  "fechaInicialMarcha": "12/5/2020",
  "ultimaFechaMarcha": "2/28/2022",
  "ultimaFechaMantenimiento": "10/23/2021",
  "idUltimoMantenimiento": 9
}, {
  "id": 10,
  "nombre": "Papa Juliett Bravo Golf Lima Foxtrot Uniform India Hotel Tango Yankee Kilo Romeo Whiskey X-ray Charlie",
  "descripcion": "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci",
  "serial": "321665785-X",
  "fechaInicialMarcha": "5/15/2021",
  "ultimaFechaMarcha": "8/11/2021",
  "ultimaFechaMantenimiento": "1/4/2022",
  "idUltimoMantenimiento": 10
}, {
  "id": 11,
  "nombre": "Yankee November Kilo Papa Zulu Oscar Mike Bravo Victor Romeo Juliett Quebec India Delta Golf Hotel Uniform Whiskey",
  "descripcion": "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
  "serial": "807991019-7",
  "fechaInicialMarcha": "11/27/2021",
  "ultimaFechaMarcha": "3/28/2022",
  "ultimaFechaMantenimiento": "5/18/2022",
  "idUltimoMantenimiento": 11
}, {
  "id": 12,
  "nombre": "Bravo Echo Foxtrot Zulu Quebec November Mike Lima Tango Uniform Alfa",
  "descripcion": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
  "serial": "767234726-8",
  "fechaInicialMarcha": "3/11/2022",
  "ultimaFechaMarcha": "11/28/2021",
  "ultimaFechaMantenimiento": "9/15/2021",
  "idUltimoMantenimiento": 12
}, {
  "id": 13,
  "nombre": "Quebec Romeo Zulu Whiskey Tango Sierra Uniform Echo Bravo Lima",
  "descripcion": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium",
  "serial": "159121994-9",
  "fechaInicialMarcha": "6/10/2021",
  "ultimaFechaMarcha": "7/8/2021",
  "ultimaFechaMantenimiento": "2/18/2022",
  "idUltimoMantenimiento": 13
}, {
  "id": 14,
  "nombre": "Romeo India Zulu Charlie Quebec Hotel Sierra Kilo Mike Alfa Whiskey X-ray",
  "descripcion": "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat",
  "serial": "511182040-X",
  "fechaInicialMarcha": "9/11/2021",
  "ultimaFechaMarcha": "1/25/2022",
  "ultimaFechaMantenimiento": "5/27/2022",
  "idUltimoMantenimiento": 14
}, {
  "id": 15,
  "nombre": "Alfa Delta India Zulu Juliett November Lima Papa Oscar Bravo Golf",
  "descripcion": "porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
  "serial": "106284204-9",
  "fechaInicialMarcha": "9/2/2021",
  "ultimaFechaMarcha": "6/15/2021",
  "ultimaFechaMantenimiento": "7/7/2021",
  "idUltimoMantenimiento": 15
}, {
  "id": 16,
  "nombre": "Charlie Mike Lima India November Foxtrot Bravo Papa Romeo X-ray Delta",
  "descripcion": "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
  "serial": "237963636-2",
  "fechaInicialMarcha": "11/3/2021",
  "ultimaFechaMarcha": "12/16/2021",
  "ultimaFechaMantenimiento": "10/14/2021",
  "idUltimoMantenimiento": 16
}, {
  "id": 17,
  "nombre": "Juliett Romeo Echo Lima November Alfa India Foxtrot Uniform Sierra Whiskey Quebec Papa Tango Mike Hotel Victor",
  "descripcion": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
  "serial": "802304534-2",
  "fechaInicialMarcha": "1/17/2021",
  "ultimaFechaMarcha": "1/3/2022",
  "ultimaFechaMantenimiento": "2/2/2022",
  "idUltimoMantenimiento": 17
}, {
  "id": 18,
  "nombre": "Uniform Whiskey Romeo Victor Bravo Papa Tango Zulu Sierra Echo India Lima X-ray November",
  "descripcion": "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque",
  "serial": "397469075-1",
  "fechaInicialMarcha": "9/8/2021",
  "ultimaFechaMarcha": "7/3/2021",
  "ultimaFechaMantenimiento": "2/19/2022",
  "idUltimoMantenimiento": 18
}, {
  "id": 19,
  "nombre": "Charlie Oscar Mike Yankee Golf Romeo Papa Tango Alfa X-ray",
  "descripcion": "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
  "serial": "230749591-6",
  "fechaInicialMarcha": "5/11/2022",
  "ultimaFechaMarcha": "6/20/2021",
  "ultimaFechaMantenimiento": "1/11/2022",
  "idUltimoMantenimiento": 19
}, {
  "id": 20,
  "nombre": "Foxtrot November Delta Charlie Yankee Papa Tango Juliett Alfa Sierra Whiskey Hotel Zulu",
  "descripcion": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
  "serial": "135286535-1",
  "fechaInicialMarcha": "2/22/2021",
  "ultimaFechaMarcha": "12/11/2021",
  "ultimaFechaMantenimiento": "3/22/2022",
  "idUltimoMantenimiento": 20
}]
let equipos = new Equipos(equiposData)

router.get("/", (req, res) => {
    res.send(equipos.listarEquipos())
});

router.get("/ver/:id", (req, res) => {
    res.send(equipos.verEquipo(
        {
            id: req.params.id,
        }
    ))
});

router.put("/editar/:id/:nombre/:descripcion/:serial/:fechaInicialMarcha/:ultimaFechaMarcha/:ultimaFechaMantenimiento/:idUltimoMantenimiento", (req, res) => {
    equipos.editarEquipo(
        {
            id: req.params.id,
            nombre: req.params.nombre,
            descripcion: req.params.descripcion,
            serial: req.params.serial,
            fechaInicialMarcha: req.params.fechaInicialMarcha,
            ultimaFechaMarcha: req.params.ultimaFechaMarcha,
            ultimaFechaMantenimiento: req.params.ultimaFechaMantenimiento,
            idUltimoMantenimiento: req.params.idUltimoMantenimiento,
        }
    )
});

router.post("/insertar/:id/:nombre/:descripcion/:serial/:fechaInicialMarcha/:ultimaFechaMarcha/:ultimaFechaMantenimiento/:idUltimoMantenimiento", (req, res) => {
    equipos.insertarEquipo(
        {
            id: req.params.id,
            nombre: req.params.nombre,
            descripcion: req.params.descripcion,
            serial: req.params.serial,
            fechaInicialMarcha: req.params.fechaInicialMarcha,
            ultimaFechaMarcha: req.params.ultimaFechaMarcha,
            ultimaFechaMantenimiento: req.params.ultimaFechaMantenimiento,
            idUltimoMantenimiento: req.params.idUltimoMantenimiento,
        }
    )
});

router.delete("/eliminar/:id", (req, res) => {
    equipos.eliminarEquipo(
        {
            id: req.params.id,
        }
    )
});

module.exports = router
module.exports.equipos = equipos