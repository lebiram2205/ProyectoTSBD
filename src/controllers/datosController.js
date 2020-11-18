const { request } = require("express");
const controller={};

controller.list=  (req,res)=>{
    req.getConnection((err,conn)=>{
         conn.query('SELECT * FROM CONTACTO',(err,datos)=>{
            if(err){
                res.json(err);
            }
            res.json(datos)
        });
    });
};
controller.guardar=(req,res)=>{
    const data =req.body;
    req.getConnection((err,conn)=>{
        console.log(req.body);

            conn.query('INSERT INTO CONTACTO set ?',[data], (err, datos) => {
            if(err){
                res.json(err);
            }
            res.json({
                'status':'Contacto guardado'
            });
               
 
       });
   });
}
controller.guardarTest=(req,res)=>{
    const data =req.body ;
    req.getConnection((err,conn)=>{
        
        // const query=conn.query('INSERT INTO DATOS_USUARIOS(nombre,sexo)VALUES (?)', data, (err, datos) => {
            conn.query('INSERT INTO TEST set ?',[data], (err, datos) => {
            if(err){
                res.json(err);
            }
            res.json({
                'status':'test guardado'
            });
               
 
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

        conn.query('SELECT count(mr.MUNICIPIO) as TOTAL FROM covid19_mexico cm LEFT JOIN municipios mr ON cm.MUNICIPIO_RES=mr.CLAVE_MUNICIPIO WHERE mr.MUNICIPIO ="IZTAPALAPA";',(err,datos2)=>{
           if(err){
               res.json(err);
           }
           res.json(datos2)
            // console.log(datos2);
            //  res.render('charts',{
            //   data:datos2  
            // });
           
       });
   });
}
controller.casosPositivosEF=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT eres.ENTIDAD_FEDERATIVA AS ENTIDAD, COUNT(*) AS CASOS_POSITIVOS FROM covid19_mexico cm  LEFT JOIN entidades eres ON cm.ENTIDAD_RES=eres.CLAVE_ENTIDAD  WHERE cm.RESULTADO_LAB = "1" GROUP BY ENTIDAD;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
         
           
       });
   });
}
controller.casosPositivosMEF=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT eres.ENTIDAD_FEDERATIVA AS ENTIDAD, COUNT(*) AS CASOS_POSITIVOS_MUJERES FROM covid19_mexico cm LEFT JOIN entidades eres ON cm.ENTIDAD_RES=eres.CLAVE_ENTIDAD WHERE cm.RESULTADO_LAB = "1" AND Sexo = "1" GROUP BY ENTIDAD;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
         
           
       });
   });
}
controller.casosPositivosHEF=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT eres.ENTIDAD_FEDERATIVA AS ENTIDAD, COUNT(*) AS CASOS_POSITIVOS_HOMBRES FROM covid19_mexico cm LEFT JOIN entidades eres ON cm.ENTIDAD_RES=eres.CLAVE_ENTIDAD WHERE cm.RESULTADO_LAB = "1" AND Sexo = "2" GROUP BY ENTIDAD; ',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
         
           
       });
   });
}
controller.defuncionesEF=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT eres.ENTIDAD_FEDERATIVA AS ENTIDAD, COUNT(*) AS CASOS_POSITIVOS FROM covid19_mexico cm  LEFT JOIN entidades eres ON cm.ENTIDAD_RES=eres.CLAVE_ENTIDAD  WHERE cm.RESULTADO_LAB = "1" GROUP BY ENTIDAD;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
         
           
       });
   });
}
controller.defuncionesMEF=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT eres.ENTIDAD_FEDERATIVA AS ENTIDAD, COUNT(*) AS CASOS_POSITIVOS FROM covid19_mexico cm  LEFT JOIN entidades eres ON cm.ENTIDAD_RES=eres.CLAVE_ENTIDAD  WHERE cm.RESULTADO_LAB = "1" GROUP BY ENTIDAD;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
         
           
       });
   });
}
controller.defuncionesHEF=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT eres.ENTIDAD_FEDERATIVA AS ENTIDAD, COUNT(*) AS MUERTES_POR_COVID FROM covid19_mexico cm LEFT JOIN entidades eres ON cm.ENTIDAD_RES=eres.CLAVE_ENTIDAD WHERE cm.RESULTADO_LAB ="1" AND cm.FECHA_DEF <> "9999-99-99" AND cm.SEXO = "2" GROUP BY ENTIDAD;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
       });
   });
}

controller.casosPositivosA=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT mun.MUNICIPIO AS ALCALDIA, COUNT(*) AS CASOS_POSITIVOS FROM covid19_mexico cm LEFT JOIN municipios mun ON cm.MUNICIPIO_RES=mun.CLAVE_MUNICIPIO AND CLAVE_ENTIDAD  = "09" WHERE cm.RESULTADO_LAB = "1" AND cm.ENTIDAD_RES = "09" GROUP BY ALCALDIA ORDER BY mun.CLAVE_MUNICIPIO;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
       });
   });
}
controller.casosPositivosMA=async (req,res)=>{

    req.getConnection((err,conn)=>{

         conn.query('SELECT mun.MUNICIPIO AS ALCALDIA, COUNT(*) AS CASOS_POSITIVOS FROM covid19_mexico cm LEFT JOIN municipios mun ON cm.MUNICIPIO_RES=mun.CLAVE_MUNICIPIO AND mun.CLAVE_ENTIDAD  = "09" WHERE cm.RESULTADO_LAB = "1" AND cm.ENTIDAD_RES = "09" AND cm.SEXO = "1"  GROUP BY ALCALDIA ORDER BY mun.CLAVE_MUNICIPIO;',(err,datos3)=>{
           if(err){
               res.json(err);
           }
           res.json(datos3)
       });
   });
}

    module.exports = controller;