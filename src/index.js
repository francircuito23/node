//Express
const express = require('express');
const app = express();

//Morgan
const morgan=require('morgan');

//Body-Parser y Cors
const bodyParser = require('body-parser');
const cors = require('../node_modules/cors');

//Mysql
var mysql = require('mysql');

//Chalk
const chalk = require('chalk');
 
//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Body-Parser y Cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//BBDD
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "node",
    user: "root",
    password: ""
});

//Conexión a la BBDD
con.connect(function(err) {
if(err){
    throw err;
}else{
    console.log("BBDD Conectada.");
}
});


//Lista Usuarios
const Usuarios = require('./users/ListaUsus').ListaUsus;
app.get('/usuarios', (req, res) => Usuarios(req,res,con));

//Usuario por ID
const IdUsuario = require('./users/UsuID').Id_Usuario;
app.get('/usuarios/:id', (req, res) => IdUsuario(req,res,con));

//Lista Vehículos por ID de Usuario
const ListaCoches = require('./vehiculos/listaCoches').ListaVeh;
app.get('/vehiculos/usu/:id', (req, res) => ListaCoches(req,res,con));

//Vehículo por su ID
const CocheID = require('./vehiculos/VehID').VehID;
app.get('/vehiculos/:id', (req, res) => CocheID(req,res,con));

//Lista de Servicios por ID vehículo
const ListaSev = require('./servicios/ListaServIDveh').ListaSev;
app.get('/servicios/veh/:id', (req, res) => ListaSev(req,res,con));

//Servicio por su ID
const ServID = require('./servicios/ServID').ServID;
app.get('/servicios/:id', (req, res) => ServID(req,res,con));

//Actualizar datos de Usuario
const ModificarUsu = require('./users/ModificarUsu').ModificarUsu;
app.put('/ModificarUsuario/:id', async (req, res) => ModificarUsu(req,res,con));

//Crear Usuario
const CrearUsuario = require('./CrearUsuario/CrearUsu').CrearUsuarios;
app.post('/CrearUsuario', async (req, res) => CrearUsuario(req,res,con));

//Eliminar Usuario
const EliminarUsu = require('./users/EliminarUsu').BorrarUsu;
app.delete('/BorrarUsuario/:id', (req, res) => EliminarUsu(req,res,con));

//Modificar Vehículo
const ModificarVeh = require('./vehiculos/ModificarVeh').ModificarVeh;
app.put('/ModificarVehiculo/:id', (req, res) => ModificarVeh(req,res,con));

//Crear Vehículo
const CrearVeh = require('./vehiculos/CrearVehiculo').CrearVehiculos;
app.post('/CrearVehiculo', (req, res) => CrearVeh(req,res,con));

//Eliminar Vehículo
const EliminarVeh = require('./vehiculos/EliminarVeh').BorrarVeh;
app.delete('/BorrarVehiculo/:id', (req, res) => EliminarVeh(req,res,con));

//Modificar Servicio
const ModificarServ = require('./servicios/ModificarServ').ModificarServ;
app.put('/ModificarServicio/:id', (req, res) => ModificarServ(req,res,con));

//Crear Servicio
const CrearServ = require('./servicios/CrearServ').CrearServ;
app.post('/CrearServicio', (req, res) => CrearServ(req,res,con));

//Eliminar Servicio
const EliminarServ = require('./servicios/EliminarServ').BorrarServ;
app.delete('/BorrarServicio/:id', (req, res) => EliminarServ(req,res,con));

//Usuario y su lista de Vehículos
const ListaVehiculosUsu = require('./users/Usu-ListaCoches').Id_Usu_Lista_Veh;
app.get('/ListaVehiculosUsu/:id', (req, res) => ListaVehiculosUsu(req,res,con));

//Vehículo y su lista de Servicios
const ListaServVeh = require('./vehiculos/Veh-ListaServ').Id_Veh_Lista_Serv;
app.get('/ListaServiciosVeh/:id', (req, res) => ListaServVeh(req,res,con));
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor conectado al puerto ${app.get('port')}`);
});

//Routes
app.use(require('./routes/index'));
