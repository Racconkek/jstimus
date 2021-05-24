const checkTask = require('./controllers/checkTask.js')
const getHome = require('./controllers/getHome.js');
const getConfigs = require('./controllers/getConfigs.js');

module.exports = app => {
    app.post('/checkTask/:name', checkTask);
    app.get('/configs', getConfigs);
    app.use('*', getHome);
};
