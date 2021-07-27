const axios = require('axios');

async function PegarTabelaCadastro(Telefone) {
    const apiSecret = process.env.SHEETDB;
    return axios.get(`https://sheet.best/api/sheets/${apiSecret}/search?Telefone=${Telefone}`);  
  }

async function PegarStatus(Telefone, response){
    const dynamicDate = new Date();
    let status = 'não existe';
    Telefone = "554799549637";
    return PegarTabelaCadastro(Telefone).then(res => {
      res.data.map(person => {
        status = person.Status;
      });
    console.log(status);
    response.json({
        Date: dynamicDate.toGMTString(),
        Status: status
    })
    });
  }

export default PegarStatus;