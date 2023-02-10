const db = require('../Mysqlparams');

exports.getOneinstance = (req,res,next) =>{
               db.query('SELECT idinstance, nominstance, niveauinstance, boss1, boss2, boss3 FROM lotrofr.instance WHERE nominstance= ?', req.body.nominstance, (err, result) =>{
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
