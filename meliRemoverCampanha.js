const axios = require('axios')
const fs = require('fs');
const ProgressBar = require("./config/ProgressBar");
const clientMeli = require('./config/clientMeli')
const Bar = new ProgressBar();

function enviar (element) {
    let cliente;
    process.argv.every(e => {      
        cliente = clientMeli.find(f => f.loja == e);
        return !cliente;
    });


    var config = {
        method: 'DELETE',
        url: 'https://api.mercadolibre.com/users/181764571/deals/MLB627/proposed_items/'+element+'?access_token='+cliente.acess_token
        }
      

      axios(config)
      .then(resp=>{  
          fs.appendFileSync('logsuccess.txt', '>>>>>>>>>>>>>>>>>>>> SKU [' +  element  + ']\n');     
          fs.appendFileSync('logsuccess.txt', JSON.stringify(resp.data) + '\n');
      })  
      .catch(error=>{
          fs.appendFileSync('logerror.txt', '>>>>>>>>>>>>>>>>>>>> SKU [' +  element  + ']\n');
          fs.appendFileSync('logerror.txt', JSON.stringify(error.response.data.message));       
      });        
  }      
  
  
  
  let array = ['MLB833453139',
  'MLB833460708',
  'MLB833466677',
  'MLB833466675',
  'MLB1000576381',
  'MLB897859264',
  'MLB904365059',
  'MLB877845986',
  'MLB923291855',
  'MLB1029058225',
  'MLB1029058284',
  'MLB1028891749',
  'MLB1028891420',
  'MLB1029014065',
  'MLB1028895518',
  'MLB1028898058',
  'MLB1028897888',
  'MLB1028897867',
  'MLB1028897913',
  'MLB1029064715',
  'MLB1116729770',
  'MLB1087627399',
  'MLB1127461421',
  'MLB1127464897',
  'MLB1127453453',
  'MLB1127453460',
  'MLB1127429879',
  'MLB1127424079',
  'MLB1180139170',
  'MLB1180139026',
  'MLB1118930398',
  'MLB1118930393',
  'MLB1178163845',
  'MLB1178160400',
  'MLB1139936303',
  'MLB1139939264',
  'MLB1139945641',
  'MLB1139949653',
  'MLB1132038130',
  'MLB1132038447',
  'MLB1198089910',
  'MLB1198094890',
  'MLB1376420194',
  'MLB1376417816',
  'MLB1391349715',
  'MLB1391338741',
  'MLB1386493108',
  'MLB1386495190',
  'MLB1387283080',
  'MLB1387283321',
  'MLB1455528792',
  'MLB1455540441',
  'MLB1474769744',
  'MLB1474638646',
  'MLB1466785609',
  'MLB1620310231',
  'MLB1623132999',
  'MLB1623131838',
  'MLB1620991494',
  'MLB1620990788',
  'MLB1622286651',
  'MLB1622283839',
  'MLB1621181325',
  'MLB1621187211',
  'MLB1620319457',
  'MLB1648082728',
  'MLB1683330803',
  'MLB1683327060',
  'MLB1714470749',
  'MLB1694140103',
  'MLB1029064744',
  'MLB1844442201',
  'MLB1844437790',
  'MLB1844446851',
  'MLB1844438238',
  'MLB1846978724',
  'MLB1846973979',
  'MLB1846988588',
  'MLB1846988027',
  'MLB1846990322',
  'MLB1846974520',
  'MLB1847000649',
  'MLB1846965353',
  'MLB1871206801',
  'MLB1797805606',
  'MLB1797805229'  
  
  ]
  
  
  Bar.init(array.length);
  fs.writeFileSync('logsuccess.txt', '');
  fs.writeFileSync('logError.txt', '');
  
  
  var i = 0;
  var loop = setInterval(function(){ 
      enviar(array[i]) 
      Bar.update(i);
      if(i > array.length){
          clearInterval(loop)
      }
      i++;
  
  }, 10);