const itemsController = require('./items/index');

const controllers = {
    index: (req, res) => {
        res.status(200).json({ message: 'Web api iniciada' })
    },
    items: itemsController,
};

module.exports = controllers;