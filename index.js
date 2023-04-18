const express = require('express');
const cors = require('cors');
const AdminEspecie = require('./AdminEspecie');

class AteneaVetApi{

    constructor(){

        this.puerto = 3000;
        this.app = express();
        this.adminEspecie = new AdminEspecie();

       // this.app.use(cors);
        this.app.use(this.configurarCORS)
        this.app.use(express.json());

        this.app.post("/crear_especies",(req,res)=>{this.adminEspecie.crearEspecie(req,res);});
        this.app.get("/listar_especies",(req,res)=>{this.adminEspecie.listarEspecies(req,res);});

    

    }

    
   //---Configuracion CORS Manual sin package Cors
    configurarCORS(res,req,next){
         
        res.header("Acces-control-Allow-Origin", "*");
        res.header("Acces-control-Allow-Methods", "GET, POST");
        res.header("Acces-control-Allow-Headers", "Content-Type");
        next();
    }
    

    IniciarServidor(){

        this.app.listen(this.puerto,()=>{
            console.log(`Servidor ejecutandose en puerto ${this.puerto}`)
        });

    }

}

const ateneaVetApi = new AteneaVetApi();
ateneaVetApi.IniciarServidor();


