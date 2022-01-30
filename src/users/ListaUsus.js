//Lista De Usuarios
const ListaUsus = (req, res, con) => {
    let sql = "SELECT u.id_user, u.login, u.dni, r.rol from usuarios u inner join roles r on u.rol_id = r.id";
    con.query(sql, function (err, result){
        if (err) throw err;
        return res.json(result);
    });
}
exports.ListaUsus = ListaUsus;