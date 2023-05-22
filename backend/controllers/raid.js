const db = require('../Mysqlparams');

exports.signup =(req,res,next) =>{
               let data={
                        nomraid: req.body.nomraid,
                        niveau: req.body.niveau,
                        boss1: req.body.boss1,
                        boss2: req.body.boss2,
                        boss3: req.body.boss3,
                        boss4: req.body.boss4,
                        boss5: req.body.boss5      
               }
               db.query('INSERT INTO raid SET ?', data, (err, rows)=>{
                              if(err){
                                   return res.status(500).json({message: err.message})
                              }else{
                                   return res.status(200).json({message: "raid ajouté"})
                              }
               })
}

exports.modifyRaid = (req, res, next) =>{
//     let  data = {
//           idraid: req.body.idraid,
//           nomraid: req.body.nomraid,
//           niveau: req.body.niveauraid,
//           boss1: req.body.boss1,
//           boss2: req.body.boss2,
//           boss3: req.body.boss3,   
//      }
     db.query('UPDATE lotrofr.raid SET nomraid= ?, niveau= ?, boss1= ?, boss2= ?, boss3= ?, boss4= ?, boss5= ? WHERE idraid= ?;', [req.body.nomraid, req.body.niveau, req.body.boss1, req.body.boss2, req.body.boss3, req.body.boss4, req.body.boss5,req.body.idraid ], (err, result)=>{
          if(err){
               return res.status(500).json({message: err.message})
          }else{
               return res.status(200).json({message: "raid modifié"})
          }
     })
}

exports.getOneraid =  (req,res,next) =>{
       db.query('SELECT * FROM lotrofr.raid WHERE nomraid= ?',req.body.nomraid, (err, result)=>{             
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

// [req.body.nomraid, req.body.niveau, req.body.boss1, req.body.boss2, req.body.boss3, req.body.boss4, req.body.boss5, req.body.idraid]