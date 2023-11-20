const dataJson = `{
    "results": [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
        },
        {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
        },
        {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
        },
        {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
        }
    ]
}
`

console.log(typeof dataJson);

const jsonData = JSON.parse(dataJson);
let datos = ''

console.log(jsonData.results)

 jsonData.results.forEach(element => {     
    
     datos += `
     <div class="table">
     <p> title: ${element.title}</p>
     <p>priority: ${element.priority}</p>
     <p>isDone: ${element.isDone}</p>
     </div>`
     
 });
    

const data = document.getElementById('tabla').innerHTML = datos;


imprimirJson()