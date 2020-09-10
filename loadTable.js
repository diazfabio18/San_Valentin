fetch("data.json")
    .then(response => response.json())
    .then(datos => {
        console.log(datos)

        var tabla = document.getElementById('tabla-numeros');

        datos.map((item) => {

            tabla.innerHTML += `<tr>
                                    <th scope="row">${item.date}</th>
                                    <td>${item.number}</td>
                                    <td>${item.place}</td>
                                </tr>`;
            
        });

        tabla.innerHTML += `</div>`;
    })

