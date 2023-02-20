const db = require('../Mysqlparams');

exports.signup=(req,res,next) =>{
               let data = {
                              pseudo: req.body.pseudo,
                              email: req.body.email,
                              password : req.body.password,
               }
               
               db.query('INSERT INTO joueur SET ?', data, (err, rows)=>{
                     if(err){
                              return res.status(500).json({message: err.message})
                     }else{
                       return res.status(200).json({message: 'joueur ajouté'})
                     }
               })
} 

exports.login=(req, res, next) =>{
               db.query('SELECT pseudo, statut, idjoueur FROM lotrofr.joueur WHERE email= ?;', req.body.email ,(err, result)=>{
                    if(err){
                              return res.status(500).json({message: err.message})    
                     }else{
                               var row = '';
                                Object.keys(result).forEach((key) => {
                                 row = result[key];                        
                                 });                 
                     if(err){
                               return res.status(500).json({message : err.message})
                      }else{    
                                return res.status(200).json({message : result})
                       }
                 }              
               })
}