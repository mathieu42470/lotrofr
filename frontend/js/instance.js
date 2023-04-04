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
             console.log(response)
          for (a = 0; a < response.message.length; a++){
            instance = response + `
<div class="ensemblenom"> <p>Nom de l'instance: ${response.message[a].nominstance}</p>
<p>Niveau de l'instance: T ${response.message[a].niveau}</p>
<p>Nombre de joueur: ${response.message[a].nombrejoueur}</p>
</div>
<div class="bossinstance"><h2>boss 1 </h2>
<p>${response.message[a].boss1} </p>
</div>
<div class="bossinstance"><h2>boss 2 </h2>
<p>${response.message[a].boss2} </p>
</div>
<div class="bossinstance"><h2>boss 3 </h2>
<p>${response.message[a].boss3} </p>
</div>
<div class="bossinstance"><h2>boss 4 </h2>
<p>${response.message[a].boss4} </p>
</div>
<div class="bossinstance"><h2>boss 5 </h2>
<p>${response.message[a].boss5} </p>
</div>
`
 let instanc = document.getElementById('instanc');
instanc.innerHTML = instance
          }
            })
})


let boutton = document.getElementById('boutton');
boutton.addEventListener('click', (e) =>{
      e.preventDefault();
      data ={
            nominstance : document.getElementById('nominstance').value,
            niveau : document.getElementById('niveau').value,
            nombre : document.getElementById('nombre').value,
            boss1 : document.getElementById('boss1').value,
            boss2 : document.getElementById('boss2').value,
            boss3 : document.getElementById('boss3').value,
            boss4 : document.getElementById('boss4').value,
            boss5 : document.getElementById('boss5').value,
      }
      fetch('http://localhost:3000/api/instance/signup', {
            method: 'POST',
            headers:{
                  "Accept": "application/json",
                  "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
            
      }); console.log(data)
})
