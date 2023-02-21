const  bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Mysqlparams');

exports.signup=(req,res,next) =>{
    try{
         bcrypt.hash(req.body.password, 10).then(hash =>{        
               let data = {
                              pseudo: req.body.pseudo,
                              email: req.body.email,
                              password : hash,
               }               
               db.query('INSERT INTO joueur SET ?', data, (err, rows)=>{
                     if(err){
                              return res.status(500).json({message: err.message})
                     }else{
                       return res.status(200).json({message: 'joueur ajouté'})
                     }
               }) 
              })
              }catch(err) {
                console.error('handle the err: ', err)
               }
} 

exports.login=(req, res, next) =>{
               db.query('SELECT password, pseudo, statut, idjoueur FROM lotrofr.joueur WHERE email= ?;', req.body.email ,(err, result, fields)=>{
                    if(err){
                              return res.status(500).json({message: err.message})    
                     }else{
                               var row = '';
                                Object.keys(result).forEach(function(key) {
                                 row = result[key];  
                                               
                                 });                                   
                                }
                                next;        
                     if(result.lenght > 0){  
                     
                               bcrypt.compare(req.body.password,row.password).then((valid) => {
                                if(valid){
                                   console.log(req.body) 
                                  res.status(200).json({joueur: row,token: jwt.sign(
                                   {idjoueur: row.idjoueur},
                                   process.env.JWT,
                                   {expiresIn: '24h'} 
                                  )
                                })
                      }else{    
                                return res.status(500).json({message : "mot de passe incorrect"})
                       }                         
               })
              }
            })
}