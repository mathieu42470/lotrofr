let button = document.getElementById("button");
let bouton = document.getElementById("bouton");

button.addEventListener("click", (e) =>{
               e.preventDefault();
             email ={
               email : document.getElementById("email").value,
            }

            fetch('http://localhost:3000/api/joueur/login', {
                 method: 'POST',
                 headers:{
                     "Accept": "application/json",
                     "Content-Type":"application/json"
               },
                 body: JSON.stringify(email)
            })
            .then( response => response.json()).then(idjoueur =>{
              localStorage.setItem('idjoueur', JSON.stringify(idjoueur));
            })
})

bouton.addEventListener("click", (e)=>{
  e.preventDefault();
    data ={
      pseudo : document.getElementById("pseudo2").value,
      email : document.getElementById("email2").value,
    }
    fetch('http://localhost:3000/api/joueur/signup',{
      method: 'POST',
      headers : {
        "Accept": "application/json",
        "Content-Type":"application/json"
  },
      body : JSON.stringify(data)
    }).then(response => response.json()).then(data =>{
      console.log(data, "joueur ajouté" )
    })

})