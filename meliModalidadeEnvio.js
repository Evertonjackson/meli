const axios = require('axios');
const { Console } = require('console');
const fs = require('fs');
const ProgressBar = require("./config/ProgressBar");
const clientMeli = require('./config/clientMeli')

const Bar = new ProgressBar();

 const enviar = async (element)  => {
  let cliente;
  process.argv.every(e => {      
      cliente = clientMeli.find(f => f.loja == e);
      return !cliente;
  });

    var config = {
        method: 'put',
        url: 'https://api.mercadolibre.com/items/'+element+'?access_token=APP_USR-6566853810670919-082620-04cf67f54808fc91eb01b0b81dba081b-181764571',
        data : '{"shipping":{"dimensions":"10x10x20,20000","mode":"me1"}}'

    }

  
     try {

    let reponse = await axios(config);
    fs.appendFileSync('logsuccess.txt', JSON.stringify(reponse.data) + ',\n');
     
   } catch (error) {

    fs.appendFileSync('logerror.txt', '>>>>>>>>>>>>>>>>>>>> SKU [' +  element  + ']\n');
    fs.appendFileSync('logerror.txt', JSON.stringify(error));      
     
   }
  }

  
  let  array = ['MLB1875323584',
  'MLB1875323382',
  'MLB1875323055',
  'MLB1875323823']
  
  
  
  Bar.init(array.length);
  fs.writeFileSync('logsuccess.txt', '[');
  fs.writeFileSync('logerror.txt', '');

  const executar = async() =>{

    var i = 0;
    for ( let mlb of array){
      await enviar(mlb);
      Bar.update(i);
      if(i > array.length){
        clearInterval(loop)
      }

      i++;

    };
  }
  

  executar();
