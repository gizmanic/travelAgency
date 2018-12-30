const path = require('path'); 

module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        path: path.resolve(__dirname, '.app/scriptsMain'),
        filename: 'app.js'    
    }    
};