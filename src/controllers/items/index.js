const getController = require('./get.controller')

const controllers = {
    getAllFiltered: getController.allFiltered,
    getById: getController.byId
}

module.exports = controllers;