//Eliminar Vehículo
const BorrarVeh = (req, res, con) => {

    const id_veh = req.params.id;
    let sql = "DELETE FROM vehiculos where id_veh =" + id_veh;

    con.query(sql, err => {
        if (err) throw err;

        res.send("Vehículo Eliminado.");
        
    });
}
exports.BorrarVeh = BorrarVeh;