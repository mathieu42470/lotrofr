const db = require('../Mysqlparams');

exports.signup =(req,res,next) =>{
               let data={
                        nomraid: req.body.nomraid,
                        niveauraid: req.body.niveauraid,
                        boss1: req.body.boss1,
                        boss2: req.body.boss2,
                        boss3: req.body.boss3,      
               }
               db.query('INSERT INTO raid SET ?', data, (err, rows)=>{
                              if(err){
                                   return res.status(500).json({message: err.message})
                              }else{
                                   return res.status(200).json({message: "raid ajouté"})
                              }
               })
}

exports.getOneraid =  (req,res,next) =>{
       db.query('SELECT * FROM lotrofr.raid WHERE idraid =?', req.params.idraid, (err, result)=>{
               if(err){
                       return res.status(500).json({message: err.message})       
               }else{
                              var row = '';
                              Object.keys(result).forEach((key) => {
                                 row = result;                        
                              });                 
                              if(err){
                                return res.status(500).json({message : err.message})
                               }else{    
                                 return res.status(200).json({message : result})
                                }
                    } 
       })        
}