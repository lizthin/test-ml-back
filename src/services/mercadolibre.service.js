const request = require('request');
const ENV = require('../env/env');
const urlTemplate = require('url-template');

const mercadolibreItems = {
    getAllFiltered: (q) => {
        try {
            return new Promise((resolve, reject) => {
                const url = urlTemplate.parse(`${ENV.services.mercadoLibre.host}/sites/MLA/search?q=${q}`).expand({});

                request({
                    url: url,
                    method: 'GET',
                    json: true
                },
                    (error, response, body) => {
                        if (!error && response.statusCode == 200)
                            resolve(body || []);
                        else
                            reject(error);
                    });
            });
        } catch (error) {
            throw new Error(error)
        }

    },
    getById: (id) => {
        try {
            return new Promise((resolve, reject) => {
                const url = urlTemplate.parse(`${ENV.services.mercadoLibre.host}/items/${id}`).expand({});

                request({
                    url: url,
                    method: 'GET',
                    json: true
                },
                    (error, response, body) => {
                        if (!error && response.statusCode == 200)
                            resolve(body || []);
                        else
                            reject(error);
                    });
            });

        } catch (error) {
            throw new Error(error)
        }
    },
    getDescriptionById: (id) => {
        try {
            return new Promise((resolve, reject) => {
                const url =  urlTemplate.parse(`${ENV.services.mercadoLibre.host}/items/${id}/description`).expand({});
                request({
                    url: url,
                    method: 'GET',
                    json: true
                },
                    (error, response, body) => {
                        if (!error && response.statusCode == 200)
                            resolve(body || []);
                        else
                            reject(error);
                    });
            });

        } catch (error) {
            throw new Error(error)
        }
    }
};

module.exports = mercadolibreItems;