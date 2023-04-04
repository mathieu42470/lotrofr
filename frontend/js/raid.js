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
    }).then( response => response.json()).then(response =>{
      let raid = [];
   for (b = 0; b < response.message.length; b++){
     raid = response + `
<div class="ensemblenom"> <p>Nom du raid: ${response.message[b].nomraid}</p>
<p>Niveau du raid: T ${response.message[b].niveau}</p>
</div>
<div class="bossinstance"><h2>boss 1 </h2>
<p>${response.message[b].boss1} </p>
</div>
<div class="bossinstance"><h2>boss 2 </h2>
<p>${response.message[b].boss2} </p>
</div>
<div class="bossinstance"><h2>boss 3 </h2>
<p>${response.message[b].boss3} </p>
</div>
<div class="bossinstance"><h2>boss 4 </h2>
<p>${response.message[b].boss4} </p>
</div>
<div class="bossinstance"><h2>boss 5 </h2>
<p>${response.message[b].boss5} </p>
</div>
`
let raids = document.getElementById('raids');
raids.innerHTML = raid
   }
    })
});

let boutton = document.getElementById("boutton");
boutton.addEventListener('click', (e) =>{
      e.preventDefault();
      raid = {
            nomraid: document.getElementById('nomraid').value,
            niveau: document.getElementById('niveauraid').value,
            boss1: document.getElementById('bossraid1').value,
            boss2: document.getElementById('bossraid2').value,
            boss3: document.getElementById('bossraid3').value,
            boss4: document.getElementById('bossraid4').value,
            boss5: document.getElementById('bossraid5').value,
      }
      fetch('http://localhost:3000/api/raid/signup',{
            method: 'POST',
            headers:{
                  "Accept": "application/json",
                  "Content-Type":"application/json"
            },
            body: JSON.stringify(raid)
      })
})