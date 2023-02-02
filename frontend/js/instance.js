let instance = document.getElementById("instance");
let bouton = document.getElementById("bouton");

bouton.addEventListener('click', (e) =>{
      e.preventDefault();
      nomraid = {
               nomraid: document.getElementById('raid').value,
               niveauraid: document.getElementById('niveau').value,
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
})