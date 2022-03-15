const { response, request } = require("express");

const usuarioGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "Get api - controlador",
    q,
    nombre,
    apikey,
    limit,
    page,
  });
};

const usuarioPost = (req, res = response) => {
  const body = req.body; //obtengo lo que viene del body

  res.json({
    msg: "Post api - controlador",
    body,
  });
};

const usuarioPut = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "Put api - controlador",
    id,
  });
};

const usuarioDelete = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "Delete api - controlador",
    id,
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};
