const encriptar = require("bcryptjs");

//Crear Usuario (Contraseña encriptada)
const CrearUsuarios = async (req, res, con) => {

    let sql = "INSERT INTO usuarios SET ?";

    let usuario = {
        login: req.body.login,
        password: await encriptar.hash(req.body.password, 8),
        rol_id: req.body.rol_id,
        dni: req.body.dni,
    };

    if(usuario.dni.length != 9){
        return res.send("DNI Incorrecto.");
    }

    if(usuario.rol_id != 1 && usuario.rol_id != 2){
        return res.send("Rol Incorrecto.");
    }

    con.query(sql, usuario, err => {
        if (err) throw err;

        res.send("Usuario creado.");
    });
}
exports.CrearUsuarios = CrearUsuarios;