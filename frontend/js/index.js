let button = document.getElementById("button");

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
              // console.log(data)
            })
})