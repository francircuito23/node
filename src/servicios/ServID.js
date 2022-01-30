//Servicio por su ID
const ServID = (req, res, con) => {
    const id_serv = req.params.id;
    let sql = "SELECT NomServicio, Descripción, Fecha FROM servicios where id_serv =" + id_serv;
    con.query(sql, function (err, result){
        if (err) throw err;

        if(result.length > 0){
            return res.json(result);
        }
        else{
            res.send("No hay ningún servicio con ese ID.");
        }
        
    });
}
exports.ServID = ServID;