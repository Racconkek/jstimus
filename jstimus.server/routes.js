const checkTask = require('./controllers/checkTask.js')
const getHome = require('./controllers/getHome.js');


module.exports = app => {
    app.post('/checkTask/:name', checkTask);
    app.use('*', getHome);
};
