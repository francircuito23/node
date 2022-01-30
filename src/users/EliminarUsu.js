//Eliminar Usuario
const BorrarUsu = (req, res, con) => {

    const id_usu = req.params.id;
    let sql = "DELETE FROM usuarios where id_user =" + id_usu;

    con.query(sql, err => {
        if (err) throw err;

        res.send("Usuario Eliminado.");
        
    });
}
exports.BorrarUsu = BorrarUsu;