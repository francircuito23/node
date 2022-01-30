//ID usuario
const Id_Usuario = (req, res, con) => {

    const id_usu = req.params.id;

    let sql = "SELECT u.id_user, u.login, u.dni, r.rol from usuarios u inner join roles r on u.rol_id = r.id where id_user =" + id_usu;
    
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
exports.Id_Usuario = Id_Usuario;