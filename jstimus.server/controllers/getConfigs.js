const configs = require('../tasksConfig.js');

module.exports = function getConfigs(req, res) {
    res.json(JSON.stringify(configs));
};
