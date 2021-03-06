const mercadolibreItems = require("../../services/mercadolibre.service");
const HTTP_CODES = require("../../constants/httpCodes");
const mappers = require("../../mappers/items.mapper");
const { errorStandard } = require("../../mappers/errors.mappers");

const controller = {
  allFiltered: async (req, res) => {
    try {
      let q = req.query.q;

      const objectResult = await mercadolibreItems.getAllFiltered(q);

      const resultMapper = mappers.newAllItems(objectResult);
      res.status(HTTP_CODES.OK).json(resultMapper);
    } catch (error) {
      res
        .status(HTTP_CODES.BAD_REQUEST)
        .json(
          errorStandard("Error al intentar obtener todos los items.", error)
        );
    }
  },
  byId: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id)
        res
          .status(HTTP_CODES.BAD_REQUEST)
          .json({ error: "Parametro (id) no enviado." });

      const objectItemById = await mercadolibreItems.getById(id);
      const objectItemByIdDescription = await mercadolibreItems.getDescriptionById(
        id
      );
      
      const resultMapper = mappers.newItemsByIdWithDescription(
        objectItemById,
        objectItemByIdDescription
      );
      res.status(HTTP_CODES.OK).json(resultMapper);
    } catch (error) {
      res
        .status(HTTP_CODES.BAD_REQUEST)
        .json(
          errorStandard(
            "Error al intentar obtener la información de un item.",
            error
          )
        );
    }
  },
};

module.exports = controller;
