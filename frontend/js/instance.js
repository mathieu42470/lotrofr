// let instance = document.getElementById("instance");

let button = document.getElementById("button");
button.addEventListener('click', (e) =>{
      e.preventDefault();
      nominstance ={
            nominstance: document.getElementById("instance").value,
      }
      fetch('http://localhost:3000/api/instance', {
            method: 'POST',
            headers: {
                  "Accept": "application/json",
                  "Content-Type":"application/json"
            },
            body: JSON.stringify(nominstance),
      }).then( response => response.json()).then(response =>{
            let instance = [];
            console.log(instance)
          for (a = 0; a < response.message.length; a++){
           instance = instance + `
<div> <p>Nom de l'instance: ${response.message[a].nominstance}</p>
<p>Niveau de l'instance: t${response.message[a].niveau}</p>
</div>
<div><h1>boss 1 </h1>
<p>${response.message[a].boss1} </p>
</div>
<div><h1>boss 2 </h1>
<p>${response.message[a].boss2} </p>
</div>
<div><h1>boss 3 </h1>
<p>${response.message[a].boss3} </p>
</div>
`
 let instanc = document.getElementById('instanc');
instanc.innerHTML = instance
          }
            })
})


