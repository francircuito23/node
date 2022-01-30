//Actualizar Usuario (Contraseña encriptada)
const encriptar = require("bcryptjs");

const ModificarUsu = async (req, res, con) => {

    const id_usu = req.params.id;

    const { login, dni, password, rol_id } = req.body;

    let sql = `UPDATE usuarios SET login = '${login}', dni = '${dni}', password = '${await encriptar.hash(password, 8)}', rol_id = '${rol_id}' where id_user = ${id_usu}`;

    con.query(sql, err => {
        if (err) throw err;

        res.send("Usuario actualizado.");
    });
}
exports.ModificarUsu = ModificarUsu;