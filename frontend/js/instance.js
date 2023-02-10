// let instance = document.getElementById("instance");
let bouton = document.getElementById("bouton");

bouton.addEventListener('click', (e) =>{
      e.preventDefault();
      nomraid = {
               nomraid: document.getElementById('raid').value,
      }
    fetch('http://localhost:3000/api/raid/',{
         method: 'POST',
         headers: {
               "Accept": "application/json",
               "Content-Type":"application/json"
         },
          body: JSON.stringify(nomraid),
    }).then( response => response.json()).then(boss1 =>{
    sessionStorage.setItem('boss', JSON.stringify(boss1));
    })
});



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
          for (a = 0; a < response.message.length; a++){
           instance = instance + `
<div> <p>Nom de l'instance: ${response.message[a].nominstance}</p>
<p>Niveau de l'instance: t${response.message[a].niveauinstance}</p>
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


