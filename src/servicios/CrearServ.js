//Crear Servicio
const CrearServ = (req, res, con) => {

    let sql = "INSERT INTO servicios SET ?";

    let servicio = {
        id_veh: req.body.id_veh,
        NomServicio: req.body.NomServicio,
        Descripción: req.body.Descripción,
        Fecha: req.body.Fecha
    };

    if(!Number(servicio.id_veh)){
        return res.send("El ID del vehículo tiene que ser un número.");
    }

    let ValidarFecha = Date.parse(servicio.Fecha); //Formato de fecha (MES/DÍA/AÑO)

    if(isNaN(ValidarFecha)){
        return res.send("Introduce una fecha válida.");
    }

    con.query(sql, servicio, err => {
        if (err) throw err;

        res.send("Servicio creado.");
    });
}
exports.CrearServ = CrearServ;