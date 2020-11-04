const controller={};

controller.list=  (req,res)=>{
    req.getConnection((err,conn)=>{
         conn.query('SELECT * FROM DATOS_USUARIOS',(err,datos)=>{
            if(err){
                res.json(err);
            }
            console.log(datos);
             res.render('datos',{
            data:datos  
            });
        });
    });
    };
controller.guardar=(req,res)=>{
    const data =req.body ;
    const data2={nombre:'Ricardo',sexo:'m'}
    req.getConnection((err,conn)=>{
        console.log(req.body);
        // const query=conn.query('INSERT INTO DATOS_USUARIOS(nombre,sexo)VALUES (?)', data, (err, datos) => {
            conn.query('INSERT INTO DATOS_USUARIOS set ?', [data], (err, datos) => {
            if(err){
                res.json(err);
            }
                console.log(datos)
                  res.redirect('/')
               
 
       });
   });
}
controller.eliminar=(req,res)=>{
    const {id_DUsuario} = req.params;
    console.log(id_DUsuario);
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM DATOS_USUARIOS WHERE id_DUsuario = ?', [id_DUsuario], (err, datos) => {
            if(err){
                res.json(err);
            }
            res.redirect('/')
    });
});

}
controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{

        conn.query('SELECT count(mr.MUNICIPIO) as TOTAL FROM covid19_mexico cm LEFT JOIN municipios mr ON cm.MUNICIPIO_RES=mr.CLAVE_MUNICIPIO WHERE mr.MUNICIPIO = "IZTAPALAPA";',(err,datos2)=>{
           if(err){
               res.json(err);
           }
           console.log(datos2);
       });
   });
}

    module.exports = controller;