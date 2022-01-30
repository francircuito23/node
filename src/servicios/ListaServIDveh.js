//Lista de Servicios por ID vehículo
const ListaSev = (req, res, con) => {
    const id_veh = req.params.id;
    let sql = "SELECT NomServicio, Descripción, Fecha FROM servicios where id_veh =" + id_veh;
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
exports.ListaSev = ListaSev;