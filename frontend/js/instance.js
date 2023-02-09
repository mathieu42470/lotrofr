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
      }).then( response => response.json()).then(boss1 =>{
            sessionStorage.setItem('instance', JSON.stringify(boss1));
            })
})