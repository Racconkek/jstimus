let path = require('path');

module.exports = function getHome(req, res) {
    res.sendFile(path.resolve(__dirname, '../', 'public', 'index.html'));
};
