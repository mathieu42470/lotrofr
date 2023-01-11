const db = require('../Mysqlparams');

exports.getOneinstance = (req,res,next) =>{
               db.query('SELECT * FROM lotrofr.instance WHERE idinstance= ?', req.params.idinstance, (err, result) =>{
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
