fetch("data.json")
    .then(response => response.json())
    .then(datos => {console.log(datos)


var tbodyw = document.getElementById('tabla-numeros');

/*
tbodyw.innerHTML += `   <tr>
        <th scope="row">${datos[0].date}</th>
        <td>${datos[0].number}</td>
        <td>${datos[0].place}</td>
        </tr>
`;*/

datos.map( function(item,index,array){
    tbodyw.innerHTML += `<tr>`;
    tbodyw.innerHTML += `<th scope="row">${item.date}</th>`;
    tbodyw.innerHTML += `<td>${item.number}</td>`;
    tbodyw.innerHTML += `<td>${item.place}</td>`;
    tbodyw.innerHTML += `</tr>`;
}
);

    })
//console.log(tbodyw);

/*
tbodyw.innerHTML += "<tr>";
tbodyw.innerHTML += "<th scope="row">88/88/8888</th>";
tbodyw.innerHTML += "<td>80</td>";
tbodyw.innerHTML += "<td>FYLUJ</td>";
tbodyw.innerHTML += "</tr>";*/
  
/*
tbodyw.innerHTML += `   <tr>
        <th scope="row">88/88/8888</th>
        <td>80</td>
        <td>FYLUJ</td>
        </tr>
`;*/