const axios = require("axios");

const cep_endereco = (req, res, next) => {
  const cep = req.body.cep.replaceAll(".", "").replaceAll("-", "");

  if (cep.length == 8 && !isNaN(Number(cep))) {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => {
        req.body.cep_endereco = Number(cep);

        req.body.endereco = resposta.data;

        next();
      })
      .catch(err => {
        res.status(500).json({ error: 'Erro ao consultar o CEP' });
      });
  } else {
    res.status(400).json({ error: 'CEP inválido' });
  }
};

module.exports = cep_endereco;