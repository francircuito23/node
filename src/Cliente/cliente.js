var contenido = document.querySelector(".contenido");

function info(){

    var input = document.getElementById("id_usu");

    var id_usu = input.value;

    var url = `http://localhost:4000/usuarios/${id_usu}`;

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data[0].login);
        let titulo = "<h2>Usuario</h2>";
        data.forEach(function(user) {
            titulo+= `
                <ul>
                    <li>ID: <b>${user.id_user}</b></li>
                    <li>Nombre: <b>${user.login}</b></li>
                    <li>DNI: <b>${user.dni}</b></li>
                </ul>
            `;
        });
        document.querySelector(".info").innerHTML = titulo;
    })
}