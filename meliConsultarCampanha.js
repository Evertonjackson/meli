const axios = require('axios');
const { Console } = require('console');
const fs = require('fs');
const ProgressBar = require("./config/ProgressBar");
const clientMeli = require('./config/clientMeli')




const Bar = new ProgressBar();

function enviar (element) {
  var config = {
    method: 'get',
    url: 'https://api.mercadolibre.com/items/'+element+'',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
  
  let  array = [

'MLB1867094788',
'MLB1867094789',
'MLB1867093205',
'MLB1867093213',
'MLB1867092321',
'MLB1867093207',
'MLB1867094772',
'MLB1867093215',
'MLB1867092317',
'MLB1867093210',
'MLB1867093214',
'MLB1867092320',
'MLB1867093206',
'MLB1867093212',
'MLB1867092313',
'MLB1867093211',
'MLB1867092315',
'MLB1867094787',
'MLB1867092318',
'MLB1867092319',
'MLB1867094790',
'MLB1867095346',
'MLB1867095342',
'MLB1867095332',
'MLB1867095333',
'MLB1867094792',
'MLB1867095344',
'MLB1867095345',
'MLB1867095343',
'MLB1867094791',
'MLB1867081025',
'MLB1867081027',
'MLB1867080994',
'MLB1867077201',
'MLB1867081026',
'MLB1867081023',
'MLB1867081000',
'MLB1867081024',
'MLB1867081020',
'MLB1867081022',
'MLB1867081002',
'MLB1867080999',
'MLB1867081004',
'MLB1867081029',
'MLB1867084144',
'MLB1867084147',
'MLB1867084143',
'MLB1867084142',
'MLB1867084156',
'MLB1867084148',
'MLB1867088885',
'MLB1867088860',
'MLB1867088894',
'MLB1867088892',
'MLB1867088893',
'MLB1867088888',
'MLB1867088890',
'MLB1867088886',
'MLB1867088889',
'MLB1867088891',
'MLB1867088895',
'MLB1867088887',
'MLB1867089815',
'MLB1867089843',
'MLB1867089844',
'MLB1867089849',
'MLB1867092300',
'MLB1867089842',
'MLB1867089848',
'MLB1867089847',
'MLB1867089846',
'MLB1867089845',
'MLB1867089841',
'MLB1867089840',
'MLB1867074013',
'MLB1867075169',
'MLB1867075163',
'MLB1867077200',
'MLB1867074030',
'MLB1867077196',
'MLB1867074029',
'MLB1867074028',
'MLB1867075174',
'MLB1867075175',
'MLB1867075173',
'MLB1867074032',
'MLB1867075171',
'MLB1867074031',
'MLB1867077195',
'MLB1867075170',
'MLB1867075172',
'MLB1867074018',
'MLB1867074020',
'MLB1867074027',
'MLB1867068101',
'MLB1867068089',
'MLB1867065676',
'MLB1867067028',
'MLB1867067033',
'MLB1867067014',
'MLB1867066248',
'MLB1867068096',
'MLB1867066249',
'MLB1867067027',
'MLB1867066247',
'MLB1867067026',
'MLB1867066245',
'MLB1867068098',
'MLB1867066246',
'MLB1867068104',
'MLB1867068102',
'MLB1867068115',
'MLB1867068097',
'MLB1867065680',
'MLB1867072888',
'MLB1867072076',
'MLB1867072063',
'MLB1867072916',
'MLB1867072054',
'MLB1867072915',
'MLB1867072907',
'MLB1867072073',
'MLB1867072064',
'MLB1867072914',
'MLB1867072072',
'MLB1867072905',
'MLB1867072908',
'MLB1867072055',
'MLB1867072909',
'MLB1867072062',
'MLB1867072903',
'MLB1867072904',
'MLB1867072074',
'MLB1867072891',
'MLB1867071368',
'MLB1867071380',
'MLB1867069931',
'MLB1867071338',
'MLB1867071362',
'MLB1867071364',
'MLB1867071347',
'MLB1867069932',
'MLB1867071351',
'MLB1867071352',
'MLB1867071370',
'MLB1867071339',
'MLB1867071340',
'MLB1867071367',
'MLB1867071337',
'MLB1867071343',
'MLB1867071320',
'MLB1867071336',
'MLB1867071349',
'MLB1867069933',
'MLB1867069183',
'MLB1867068116',
'MLB1867068121',
'MLB1867069921',
'MLB1867069928',
'MLB1867068649',
'MLB1867068131',
'MLB1867068629',
'MLB1867069189',
'MLB1867068119',
'MLB1867068120',
'MLB1867068647',
'MLB1867068122',
'MLB1867069922',
'MLB1867069188',
'MLB1867069173',
'MLB1867068646',
'MLB1867068628',
'MLB1867068117',
'MLB1867068645',
'MLB1867061813',
'MLB1867063779',
'MLB1867063759',
'MLB1867063781',
'MLB1867063763',
'MLB1867063754',
'MLB1867063793',
'MLB1867063786',
'MLB1867061814',
'MLB1867063795',
'MLB1867063749',
'MLB1867063780',
'MLB1867063751',
'MLB1867063752',
'MLB1867063753',
'MLB1867063750',
'MLB1867063784',
'MLB1867063783',
'MLB1867063782',
'MLB1867063787',
'MLB1867060174',
'MLB1867060189',
'MLB1867060181',
'MLB1867060179',
'MLB1867060202',
'MLB1867060198',
'MLB1867060204',
'MLB1867060192',
'MLB1867060201',
'MLB1867060176',
'MLB1867060196',
'MLB1867060191',
'MLB1867060199',
'MLB1867060175',
'MLB1867060177',
'MLB1867060188',
'MLB1867060178',
'MLB1867060186',
'MLB1867060187',
'MLB1867060180',
'MLB1867065125',
'MLB1867063796',
'MLB1867065111',
'MLB1867065664',
'MLB1867065675',
'MLB1867065118',
'MLB1867065114',
'MLB1867065124',
'MLB1867065107',
'MLB1867063800',
'MLB1867065096',
'MLB1867065115',
'MLB1867065108',
'MLB1867065110',
'MLB1867065127',
'MLB1867065671',
'MLB1867065135',
'MLB1867063797',
'MLB1867065126',
'MLB1867065117',
'MLB1867060226',
'MLB1867060205',
'MLB1867060224',
'MLB1867060237',
'MLB1867060221',
'MLB1867060206',
'MLB1867060217',
'MLB1867060208',
'MLB1867060218',
'MLB1867060222',
'MLB1867060220',
'MLB1867060219',
'MLB1867060225',
'MLB1867060212',
'MLB1867060211',
'MLB1867060229',
'MLB1867060209',
'MLB1867060236',
'MLB1867060207',
'MLB1867060210',
'MLB1867060239',
'MLB1867061774',
'MLB1867061775',
'MLB1867061781',
'MLB1867061796',
'MLB1867061797',
'MLB1867061806',
'MLB1867061792',
'MLB1867061799',
'MLB1867061808',
'MLB1867061793',
'MLB1867061791',
'MLB1867061798',
'MLB1867060246',
'MLB1867061807',
'MLB1867061790',
'MLB1867061810',
'MLB1867061805',
'MLB1867061795',
'MLB1867061794',
'MLB1867060089',
'MLB1867060087',
'MLB1867060114',
'MLB1867060088',
'MLB1867058424',
'MLB1867060119',
'MLB1867058422',
'MLB1867060118',
'MLB1867058418',
'MLB1867058419',
'MLB1867058423',
'MLB1867058421',
'MLB1867060115',
'MLB1867060113',
'MLB1867060112',
'MLB1867058429',
'MLB1867060122',
'MLB1867060123',
'MLB1867058430',
'MLB1867058431',
'MLB1867060163',
'MLB1867060156',
'MLB1867060130',
'MLB1867060173',
'MLB1867060158',
'MLB1867060124',
'MLB1867060167',
'MLB1867060165',
'MLB1867060166',
'MLB1867060170',
'MLB1867060159',
'MLB1867060161',
'MLB1867060160',
'MLB1867060157',
'MLB1867060128',
'MLB1867060125',
'MLB1867060154',
'MLB1867060169',
'MLB1867060164',
'MLB1867060171',
'MLB1867058397',
'MLB1867058409',
'MLB1867058406',
'MLB1867058411',
'MLB1867058390',
'MLB1867058395',
'MLB1867058379',
'MLB1867058392',
'MLB1867058393',
'MLB1867058380',
'MLB1867058389',
'MLB1867058398',
'MLB1867058396',
'MLB1867058394',
'MLB1867058385',
'MLB1867058386',
'MLB1867058417',
'MLB1867058384',
'MLB1867058381',
'MLB1867058391',
'MLB1867056621',
'MLB1867056646',
'MLB1867056624',
'MLB1867056640',
'MLB1867056636',
'MLB1867056642',
'MLB1867056653',
'MLB1867056641',
'MLB1867056654',
'MLB1867056620',
'MLB1867056623',
'MLB1867056655',
'MLB1867056634',
'MLB1867056647',
'MLB1867056644',
'MLB1867056635',
'MLB1867056631',
'MLB1867056628',
'MLB1867056629',
'MLB1867056652',
'MLB1867058367',
'MLB1867058373',
'MLB1867058344',
'MLB1867058374',
'MLB1867058372',
'MLB1867058350',
'MLB1867058349',
'MLB1867056718',
'MLB1867058366',
'MLB1867058364',
'MLB1867058351',
'MLB1867058376',
'MLB1867058346',
'MLB1867058363',
'MLB1867058345',
'MLB1867058375',
'MLB1867056719',
'MLB1867058347',
'MLB1867056720',
'MLB1867058348',
'MLB1867053932',
'MLB1867053934',
'MLB1867056576',
'MLB1867056578',
'MLB1867053877',
'MLB1867053887',
'MLB1867053931',
'MLB1867056585',
'MLB1867056584',
'MLB1867056549',
'MLB1867056546',
'MLB1867056545',
'MLB1867053878',
'MLB1867053930',
'MLB1867056579',
'MLB1867056575',
'MLB1867053936',
'MLB1867053929',
'MLB1867056577',
'MLB1867056529',
'MLB1867053849',
'MLB1867053866',
'MLB1867053873',
'MLB1867053874',
'MLB1867053861',
'MLB1867053865',
'MLB1867053872',
'MLB1867053876',
'MLB1867053875',
'MLB1867053864',
'MLB1867053858',
'MLB1867053867',
'MLB1867053869',
'MLB1867053862',
'MLB1867053871',
'MLB1867053870',
'MLB1867053860',
'MLB1867053855',
'MLB1867053854',
'MLB1867053853',
'MLB1867053821',
'MLB1867053842',
'MLB1867053833',
'MLB1867053847',
'MLB1867053831',
'MLB1867053823',
'MLB1867053832',
'MLB1867053824',
'MLB1867053835',
'MLB1867053839',
'MLB1867053816',
'MLB1867053841',
'MLB1867053822',
'MLB1867053848',
'MLB1867053829',
'MLB1867053843',
'MLB1867053844',
'MLB1867053837',
'MLB1867053845',
'MLB1867053818',
'MLB1867053792',
'MLB1867053795',
'MLB1867053780',
'MLB1867053794',
'MLB1867053789',
'MLB1867053796',
'MLB1867053781',
'MLB1867053798',
'MLB1867053777',
'MLB1867053810',
'MLB1867053782',
'MLB1867053760',
'MLB1867053815',
'MLB1867053775',
'MLB1867053762',
'MLB1867053778',
'MLB1867053783',
'MLB1867053776',
'MLB1867053772',
'MLB1867053761',
'MLB1867056598',
'MLB1867056618',
'MLB1867056593',
'MLB1867056612',
'MLB1867056614',
'MLB1867056615',
'MLB1867056616',
'MLB1867056597',
'MLB1867056619',
'MLB1867056603',
'MLB1867056602',
'MLB1867056587',
'MLB1867056600',
'MLB1867056617',
'MLB1867056595',
'MLB1867056608',
'MLB1867056606',
'MLB1867056596',
'MLB1867056594',
'MLB1867056609',
'MLB1867050037',
'MLB1867050028',
'MLB1867050027',
'MLB1867050046',
'MLB1867050026',
'MLB1867050038',
'MLB1867050040',
'MLB1867050031',
'MLB1867050051',
'MLB1867050039',
'MLB1867050041',
'MLB1867050030',
'MLB1867050050',
'MLB1867050049',
'MLB1867050033',
'MLB1867050029',
'MLB1867050032',
'MLB1867050036',
'MLB1867050047',
'MLB1867050034',
'MLB1867050055',
'MLB1867050064',
'MLB1867050060',
'MLB1867050058',
'MLB1867050062',
'MLB1867050059',
'MLB1867053753',
'MLB1867053724',
'MLB1867053718',
'MLB1867053704',
'MLB1867053752',
'MLB1867053755',
'MLB1867053723',
'MLB1867053758',
'MLB1867053719',
'MLB1867053702',
'MLB1867053756',
'MLB1867053682',
'MLB1867053703',
'MLB1867049997',
'MLB1867050021',
'MLB1867049995',
'MLB1867050014',
'MLB1867049993',
'MLB1867048860',
'MLB1867050022',
'MLB1867050013',
'MLB1867048859',
'MLB1867049994',
'MLB1867050020',
'MLB1867050025',
'MLB1867050019',
'MLB1867050023',
'MLB1867050015',
'MLB1867050016',
'MLB1867050024',
'MLB1867050011',
'MLB1867049998',
'MLB1867048862',
'MLB1867048791',
'MLB1867048771',
'MLB1867048776',
'MLB1867048835',
'MLB1867048810',
'MLB1867048834',
'MLB1867048792',
'MLB1867048857',
'MLB1867048827',
'MLB1867048829',
'MLB1867048833',
'MLB1867048804',
'MLB1867048801',
'MLB1867048825',
'MLB1867048800',
'MLB1867048803',
'MLB1867048799',
'MLB1867048822',
'MLB1867048797',
'MLB1867048794',
'MLB1867048818',
'MLB1867048812',
'MLB1867048798'

   ]
  
  
  Bar.init(array.length);
  fs.writeFileSync('logsuccess.txt', '[');
  fs.writeFileSync('Logerror.txt', '');

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
  