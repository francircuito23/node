const ModificarServ = (req, res, con) => {

    const id_serv = req.params.id;

    const { id_veh, NomServicio, Descripción, Fecha } = req.body;

    let sql = `UPDATE servicios SET id_veh = '${id_veh}', NomServicio = '${NomServicio}', Descripción = '${Descripción}', 
    Fecha = '${Fecha}' where id_serv = ${id_serv}`;

    if(!Number(id_veh)){
        return res.send("El ID del vehículo tiene que ser un número.");
    }

    let ValidarFecha = Date.parse(Fecha);

    if(isNaN(ValidarFecha)){
        return res.send("Introduce una fecha válida.");
    }

    con.query(sql, err => {
        if (err) throw err;

        res.send("Servicio actualizado.");
    });
}
exports.ModificarServ = ModificarServ;