//Vehículo y su lista de Servicios
const Id_Veh_Lista_Serv = (req, res, con) => {

    const id_veh = req.params.id;

    let sql = "SELECT v.id_veh, v.marca, v.modelo, v.matricula, v.combustible, v.tipo_motor, s.NomServicio, s.Descripción, s.Fecha from vehiculos v inner join servicios s on v.id_veh = s.id_veh where v.id_veh =" + id_veh;
    
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
exports.Id_Veh_Lista_Serv = Id_Veh_Lista_Serv;