const ModificarVeh = (req, res, con) => {

    const id_veh = req.params.id;

    const { id_user, marca, modelo, matricula, combustible, tipo_motor } = req.body;

    let sql = `UPDATE vehiculos SET id_user = '${id_user}', marca = '${marca}', modelo = '${modelo}', 
    matricula = '${matricula}', combustible = '${combustible}', tipo_motor = '${tipo_motor}' where id_veh = ${id_veh}`;

    con.query(sql, err => {
        if (err) throw err;

        res.send("Vehículo actualizado.");
    });
}
exports.ModificarVeh = ModificarVeh;