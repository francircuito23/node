//Lista Vehículos por ID usuario
const ListaVeh = (req, res, con) => {
    const id_usu = req.params.id;
    let sql = "SELECT marca, modelo, matricula, combustible, tipo_motor FROM vehiculos where id_user =" + id_usu;
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
exports.ListaVeh = ListaVeh;