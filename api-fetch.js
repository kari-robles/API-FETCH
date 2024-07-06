let url = 'https://reqres.in/api/users?delay=3'
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    
    
const mostrarData = (data) => {
    console.log(data)
    //console.log(data["data"])
    data = data["data"]
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].email}</td><td>${data[i].first_name}</td><td>${data[i].last_name}</td>
        <td>${data[i].avatar}
        </td></tr>`
        }
        document.getElementById('data').innerHTML = body
       
}


// Aqui pensaba hacer un arreglo que tuviera todas la imagenes que pude descargar y poner cada una en mi linea 16 de javascript para remplazar las urls por las imagenes

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './img/1-image.jpg';

imgArray[1] = new Image();
imgArray[1].src = './img/2-image.jpg';

imgArray[2] = new Image();
imgArray[2].src = './img/3-image.jpg';

imgArray[3] = new Image();
imgArray[3].src = './img/4-image.jpg';

imgArray[4] = new Image();
imgArray[4].src = './img/5-image.jpg';

imgArray[5] = new Image();
imgArray[5].src = './img/6-image.jpg';

