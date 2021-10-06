const axios = require('axios');
const { Console } = require('console');
const fs = require('fs');
const ProgressBar = require("./config/ProgressBar");
const clientMeli = require('./config/clientMeli')
const anuncios = require('./anuncios.json');
const { sleep } = require('./util/javaScript');

const Bar = new ProgressBar();
let positionBar = 0;
;
const enviar = async (element) => {    
  try {
    let config = {
      method: 'GET',
      url: 'https://api.mercadolibre.com/items/'+element,   
      params:{include_attributes:'all'}    
    };
    
    let {id, seller_id, price, original_price, status, variations, attributes, seller_custom_field,last_updated, shipping } = (await axios(config)).data;

    if (variations && variations.length) {
      for (let variation of variations)
      {
        let sku = 
          variation.attributes.find(f => f.id == 'SELLER_SKU') ? 
          variation.attributes.find(f => f.id == 'SELLER_SKU').value_name : 
          variation.seller_custom_field ? variation.seller_custom_field : ''; 
        
        fs.appendFileSync('logsuccess.txt', JSON.stringify({
          Ml:id,
          seller_id,
          PreçoDe:original_price,
          PreçoPor:price,
          status,
          sku,
          shippingMode: shipping.mode,
          last_updated,
          percentual: Math.trunc( 
            ( 1 - (price / (original_price ? original_price : price) ) ) * 100 
          )
        }) + '\n');  
      }
    }
    else {
      let sku = 
        attributes.find(f => f.id == 'SELLER_SKU') ? 
        attributes.find(f => f.id == 'SELLER_SKU').value_name : 
        seller_custom_field ? seller_custom_field : '';  

      fs.appendFileSync('logsuccess.txt', JSON.stringify({
        Ml:id,
        seller_id,
        PreçoDe:original_price,
        PreçoPor:price,
        status,
        sku,
        last_updated,
        percentual: Math.trunc( 
          ( 1 - (price / (original_price ? original_price : price) ) ) * 100 
        )
      }) + '\n');  
    }
   



    
    Bar.update(positionBar);
    positionBar = positionBar + 1;

  } catch (error) {
    fs.appendFileSync('logerror.txt', '>>>>>>>>>>>>>>>>>>>> SKU [' +  element  + ']\n');
    fs.appendFileSync('logerror.txt', JSON.stringify(error));         
  };
};     
  
Bar.init(anuncios.length);
fs.writeFileSync('logsuccess.txt', '');
fs.writeFileSync('logerror.txt', '');

const executar = async() =>{
  for ( let anuncio of anuncios){
    await sleep(1);
    enviar(anuncio);
  };
}


executar();
