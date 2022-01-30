//Vehículo por su ID
const VehID = (req, res, con) => {
    const id_veh = req.params.id;
    let sql = "SELECT marca, modelo, matricula, combustible, tipo_motor FROM vehiculos where id_veh =" + id_veh;
    con.query(sql, function (err, result){
        if (err) throw err;

        if(result.length > 0){
            return res.json(result);
        }
        else{
            res.send("No hay ningún vehículo con ese ID.");
        }
        
    });
}
exports.VehID = VehID;