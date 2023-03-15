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
    console.log(boss1)
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