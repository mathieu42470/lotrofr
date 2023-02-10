const { resourceLimits } = require('worker_threads');
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
       db.query('SELECT idraid, niveauraid, boss1, boss2, boss3, boss4, boss5 FROM lotrofr.raid WHERE nomraid= ?',req.body.nomraid, (err, result)=>{
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