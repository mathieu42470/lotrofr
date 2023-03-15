const db = require('../Mysqlparams');

exports.getOneinstance = (req,res,next) =>{
               db.query('SELECT idinstance, nominstance, niveau, boss1, boss2, boss3 FROM lotrofr.instance WHERE nominstance= ?', req.body.nominstance, (err, result) =>{
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

exports.signup = (req,res,next) =>{
  data  = {
          nominstance: req.body.nominstance,
          niveau: req.body.niveau,
          boss1: req.body.boss1,
          boss2: req.body.boss2,
          boss3: req.body.boss3,
          boss4: req.body.boss4,
          boss5: req.body.boss5,
          nombrejoueur: req.body.nombrejoueur,
  }
  db.query('INSERT  INTO instance SET ?', data, (err, rows) =>{
    if(err){
      return res.status(500).json({message: err.message})
    }else{
      return res.status(200).json({message: "instance créer"})
    }
  })
}