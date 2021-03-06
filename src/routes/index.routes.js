const controllers = require('../controllers');
const itemsRoutes = require('./items.routes')

const routes = (app) => {
    app.route('/api').get(controllers.index);
    app.use('/api/items', itemsRoutes);
}

module.exports = routes;