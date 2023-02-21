const jwt = require('jsonwebtoken');

// création du middleware d'authentification //
module.exports = (req, res, next) => {
              
               try{
                              const token = req.headers.authorization.split(' ')[1];
                              const decodedToken = jwt.verify(token, process.env.JWT);
                              const idJoueur = decodedToken.idJoueur;                           
                              if(req.body.idJoueur && req.body.idJoueur !== idJoueur){                                         
                                             throw 'user non valable!';
                              }else{                                         
                                             req.body.idJoueur = idJoueur;
                                             next();
                              }
               }
               catch (error){
                              res.status(401).json({error: error | 'requête non authentifié !'})
               }
}