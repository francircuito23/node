//Usuario y su lista de Vehículos
const Id_Usu_Lista_Veh = (req, res, con) => {

    const id_usu = req.params.id;

    let sql = "SELECT u.id_user, u.login, u.dni, r.rol, v.marca, v.modelo, v.matricula, v.combustible, v.tipo_motor from usuarios u inner join roles r on u.rol_id = r.id inner join vehiculos v on u.id_user = v.id_user where u.id_user =" + id_usu;
    
    con.query(sql, function (err, result){
        if (err) throw err;

        if(result.length > 0){
            return res.json(result);
        }
        else{
            res.send("No hay ningún usuario con ese ID.");
        }
        
    });
}
exports.Id_Usu_Lista_Veh = Id_Usu_Lista_Veh;