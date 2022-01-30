//Crear Vehiculo
const CrearVehiculos = (req, res, con) => {

    let sql = "INSERT INTO vehiculos SET ?";

    let vehiculo = {
        id_user: req.body.id_user,
        marca: req.body.marca,
        modelo: req.body.modelo,
        matricula: req.body.matricula,
        combustible: req.body.matricula,
        tipo_motor: req.body.tipo_motor
    };

    if(!Number(vehiculo.id_user)){
        return res.send("El ID del usuario tiene que ser un número.");
    }

    con.query(sql, vehiculo, err => {
        if (err) throw err;

        res.send("Vehículo creado.");
    });
}
exports.CrearVehiculos = CrearVehiculos;