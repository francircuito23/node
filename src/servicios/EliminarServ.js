//Eliminar Servicio
const BorrarServ = (req, res, con) => {

    const id_serv = req.params.id;
    let sql = "DELETE FROM servicios where id_serv =" + id_serv;

    con.query(sql, err => {
        if (err) throw err;

        res.send("Servicio Eliminado.");
        
    });
}
exports.BorrarServ = BorrarServ;